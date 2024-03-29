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
import Confetti from "react-confetti";
import useWindowSize from "@/hooks/useWindowSize";

export default function AddChallenge() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);
  const setChallenge = useStoreChallenge((state: any) => state.setChallenge);
  const [sucess, setSucess] = useState(false);
  const size = useWindowSize();

  function handleClickClose() {
    const btnClose = document.getElementById("close_addChallenge");
    btnClose?.click();
  }

  function successAdd(){
    setSucess(true)
    setTimeout(() => {
      setSucess(false)
    }, 8000);
  }

  function handleShuffleChallenge() {
    setIsLoading(true);
    const numberRandom = Math.floor(Math.random() * 9);
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
      setChallenge(challenge[numberRandom].challenges);
      setIsLoading(false);
      setPercent(0);
      successAdd()
      handleClickClose();
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
      setChallenge(challenge[e].challenges);
      setIsLoading(false);
      setPercent(0);
      successAdd()
      handleClickClose();
    }, 5000);
  }

  return (
    <>
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
                    <SelectItem value="0">Thoát ra vùng an toàn</SelectItem>
                    <SelectItem value="1">Tự chăm sóc bản thân</SelectItem>
                    <SelectItem value="2">Đi bộ</SelectItem>
                    <SelectItem value="3">Giới thiệu bản thân</SelectItem>
                    <SelectItem value="4">Đăng story</SelectItem>
                    <SelectItem value="5">Story điện ảnh</SelectItem>
                    <SelectItem value="6">30 ca khúc</SelectItem>
                    <SelectItem value="7">Âm nhạc</SelectItem>
                    <SelectItem value="8">Nâng cao sức khỏe</SelectItem>
                    <SelectItem value="9">Xây dựng kênh truyền thông</SelectItem>
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
                id="close_addChallenge"
              >
                Trở lại
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {sucess && <Confetti
        width={size.width-20}
        height={size.height}
      />}
    </>
  );
}
