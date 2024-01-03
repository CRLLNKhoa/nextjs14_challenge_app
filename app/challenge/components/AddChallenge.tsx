"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { challenge } from "@/data/challenge";
import { useStoreChallenge } from "@/store/challenge";

export default function AddChallenge() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);
  const setChallenge = useStoreChallenge((state: any) => state.setChallenge);

  function handleShuffleChallenge() {
    setIsLoading(true);
    const numberRandom = Math.floor(Math.random() * 10);
    setTimeout(() => {
      setPercent(20);
    }, 1000);
    setTimeout(() => {
      setPercent(78);
    }, 2000);
    setTimeout(() => {
      setPercent(100);
    }, 4000);
    setTimeout(() => {
      setChallenge(challenge[2]);
      setIsLoading(false);
      setPercent(0);
    }, 5000);
  }

  function handleAddChallenge(e: number) {
    setIsLoading(true);
    setTimeout(() => {
      setPercent(20);
    }, 1000);
    setTimeout(() => {
      setPercent(78);
    }, 2000);
    setTimeout(() => {
      setPercent(100);
    }, 4000);
    setTimeout(() => {
      setChallenge(challenge[e]);
      setIsLoading(false);
      setPercent(0);
    }, 5000);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={isLoading}
          className="flex gap-2 items-center bg-green-500 hover:bg-green-600 duration-500"
        >
          <img
            src="/icons/add.svg"
            alt="logo"
            className="w-6 h-6"
          />
          Tạo thử thách
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Tạo thử thách</DialogTitle>
          <DialogDescription>
            Thử thách bản thân với các thử thách vui vẻ.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h1>Chọn ngẫu nhiên: </h1>
            <Button
              disabled={isLoading}
              onClick={handleShuffleChallenge}
              className="flex gap-2 items-center bg-green-500 hover:bg-green-600 duration-500 flex-1"
            >
              <img
                src="/icons/shuffle.svg"
                alt="logo"
                className="w-6 h-6"
              />
              Tạo ngẫu nhiên
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <h1>Chọn theo chủ đề: </h1>
            <Select
              disabled={isLoading}
              onValueChange={(e: string) => handleAddChallenge(Number(e))}
            >
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Chọn chủ đề" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="0">Âm nhạc 1</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {isLoading && (
            <div className="flex justify-center items-center gap-1">
              <img
                src="/icons/loading.svg"
                alt="loading..."
                className="w-5 h-5 animate-spin"
              />
              Đang tạo thử thách {percent}%
            </div>
          )}
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
            >
              Trở lại
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
