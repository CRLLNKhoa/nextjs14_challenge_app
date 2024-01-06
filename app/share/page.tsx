"use client";
import React, { useEffect, useRef, useState } from "react";
import { Indie_Flower } from "next/font/google";
import { challenge } from "@/data/challenge";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import html2canvas from "html2canvas";
import { Button } from "@/components/ui/button";

const roboto = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {

  return (
    <div className="flex flex-1 justify-center">
      <div className="container max-w-screen-lg p-4 text-center ">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-start">30 DAY</h1>
          <div className={roboto.className}>
            <h1 id="title" className="text-5xl bg-[#E3DFDE]">
              Xây dựng kênh truyền thông
            </h1>
          </div>
          <h1 className="text-end text-3xl font-bold">CHALLENGE</h1>
          <p className="text-start flex gap-2 items-center">
            <img
              src="/icons/user.svg"
              alt="user_icon"
              className="w-4 h-4"
            />{" "}
            Nguyễn Hải Yến
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 border-t-4 border-l-4 border-slate-800 mt-12">
          {challenge[0].challenges.map((item, index) => (
            <AlertDialog key={index}>
              <AlertDialogTrigger asChild>
                <div className="relative border-b-4 border-r-4 h-[200px] border-slate-800 flex flex-col">
                  <img
                    src="/imgs/check.png"
                    alt="check"
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 h-[120px] opacity-75"
                  />
                  <div className="bg-[#E3DFDE] h-8 flex justify-center items-center text-3xl font-bold">
                    <h1 className="translate-y-3">Day {item.id}</h1>
                  </div>
                  <div className="flex-1 flex justify-center items-center">
                    <p className="text-center p-4">{item.challenge}</p>
                  </div>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Thử thách ngày thứ {item.id}?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Chia sẻ quá trình thử hiện với bạn bè trên các mạng xã hội.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div 
                  className="p-4 h-[300px] flex justify-center overflow-y-auto items-center"
                >
                  <div id="share" className="content_share  relative p-2 w-[240px] h-[420px] flex flex-col justify-center items-center">
                    <p className="mb-12 text-white">30 days challenge</p>
                    <div className="bg-white flex flex-col rounded-md">
                      <h1 className="border-b py-1 px-4 flex justify-between items-center">
                        Day {item.id}
                        <img
                          className="w-8 h-8"
                          src="/icons/challengeShare.svg"
                          alt=""
                        />
                      </h1>
                      <div className="p-4">
                        <p className="text-center">{item.challenge}</p>
                      </div>
                    </div>
                    <p className="absolute text-xs bottom-2">@challenge30days.vercel.app</p>
                  </div>
                </div>
                <Button
                  onClick={() => html2canvas(document.getElementById("share")!).then(function (canvas) {
                    var imageData = canvas.toDataURL("image/jpg");
                    var newData = imageData.replace(
                      /^data:image\/jpg/,
                      "data:application/octet-stream"
                    );
                    document
                      .getElementById("download")
                      ?.setAttribute("href", newData);
                  })
                }
                  asChild
                  
                >
                  <a className="flex gap-2 items-center bg-purple-500"
                    id="download"
                    download={"image.jpg"}
                  >
                    Lưu ảnh về máy
                  </a>
                </Button>
                <AlertDialogFooter>
                  <AlertDialogCancel>Trỏ lại</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </div>
      </div>
    </div>
  );
}
