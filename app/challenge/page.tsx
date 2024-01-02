"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Challenge from "./components/Challenge";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-screen-lg p-4 text-center">
        <h1 className="font-bold text-2xl">30 Ngày thử thách</h1>
        <p>
          Chào mừng bạn đến với thử thách 30 ngày - hành trình biến đổi bản thân
          và khám phá tiềm năng mới!
        </p>
        <div className="mt-4 flex gap-4 justify-center flex-wrap">
          <Button className="flex gap-2 items-center bg-green-500 hover:bg-green-600 duration-500">
            <img
              src="/icons/shuffle.svg"
              alt="logo"
              className="w-6 h-6"
            />
            Tạo ngẫu nhiên
          </Button>
          <Button className="flex gap-2 items-center bg-orange-500 hover:bg-orange-600 duration-500">
            <img
              src="/icons/edit.svg"
              alt="logo"
              className="w-6 h-6"
            />
             Bật/tắt chỉnh sửa
          </Button>
          <Button className="flex gap-2 items-center bg-sky-500 hover:bg-sky-600 duration-500">
            <img
              src="/icons/save.svg"
              alt="logo"
              className="w-5 h-5"
            />
            Lưu thử thách
          </Button>
          <Button variant={"destructive"} className="flex gap-2 items-center">
            <img
              src="/icons/trash.svg"
              alt="logo"
              className="w-6 h-6"
            />
            Xóa kế hoạch đã lưu
          </Button>
        </div>
        <Challenge type={"default"} edit={false} />
      </div>
    </div>
  );
}
