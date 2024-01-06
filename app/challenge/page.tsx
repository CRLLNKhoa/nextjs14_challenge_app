"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Challenge from "./components/Challenge";
import { useStoreChallenge } from "@/store/challenge";
import AlertComponent from "./components/Alert";
import AddChallenge from "./components/AddChallenge";
import html2canvas from "html2canvas";

export default function Page() {
  const toogleEdit = useStoreChallenge((state: any) => state.toogleEdit);
  const edit = useStoreChallenge((state: any) => state.edit);
  const style = useStoreChallenge((state: any) => state.style);
  const toogleStyle = useStoreChallenge((state: any) => state.toogleStyle);
  const setChallengeEdit = useStoreChallenge(
    (state: any) => state.setChallengeEdit
  );
  const setChallenge = useStoreChallenge((state: any) => state.setChallenge);
  const challenge = useStoreChallenge((state: any) => state.challenge);
  const challengeEdit = useStoreChallenge((state: any) => state.challengeEdit);

  function handleToogleStyle() {
    switch (style) {
      case "default":
        toogleStyle("carousel");
        break;
      case "carousel":
        toogleStyle("default");
        break;
      default:
        break;
    }
  }

  function handleEdit() {
    setChallengeEdit(challenge);
    toogleEdit();
  }

  function handleSave() {
    setChallenge(challengeEdit);
  }

  function handleDeleteChallenge() {
    setChallenge([]);
  }

  return (
    <div className="flex justify-center">
      <div className="container max-w-screen-lg p-4 text-center">
        <h1 className="font-bold text-2xl">Thử thách 30 ngày</h1>
        <p>
          Chào mừng bạn đến với thử thách 30 ngày - hành trình biến đổi bản thân
          và khám phá tiềm năng mới!
        </p>
        <AlertComponent />
        <div className="mt-4 flex gap-4 justify-center flex-wrap">
          <AddChallenge />
          <Button
            onClick={handleEdit}
            className="flex gap-2 items-center bg-orange-500 hover:bg-orange-600 duration-500"
          >
            <img
              src="/icons/edit.svg"
              alt="logo"
              className="w-6 h-6"
            />
            Bật/tắt chỉnh sửa
          </Button>
          <Button
            onClick={handleSave}
            className="flex gap-2 items-center bg-sky-500 hover:bg-sky-600 duration-500"
          >
            <img
              src="/icons/save.svg"
              alt="logo"
              className="w-5 h-5"
            />
            Lưu thử thách
          </Button>
          <Button
            onClick={handleDeleteChallenge}
            variant={"destructive"}
            className="flex gap-2 items-center"
          >
            <img
              src="/icons/trash.svg"
              alt="logo"
              className="w-6 h-6"
            />
            Xóa kế hoạch đã lưu
          </Button>
        </div>
        <div className="mt-4 flex gap-4 justify-center flex-wrap">
          <Button
            onClick={handleToogleStyle}
            className="flex gap-2 items-center"
          >
            <img
              src="/icons/slider.svg"
              alt="logo"
              className="w-5 h-5"
            />
            Chế độ xem
          </Button>
          <Button
            onClick={() =>
              html2canvas(document.body).then(function (canvas) {
                var imageData = canvas.toDataURL('image/jpg');
                var newData = imageData.replace(/^data:image\/jpg/, "data:application/octet-stream")
                document.getElementById("download")?.setAttribute("href",newData)
              })
            }
            variant={"destructive"}
            className="flex gap-2 items-center bg-purple-500"
          >
            <img
              src="/icons/trash.svg"
              alt="logo"
              className="w-6 h-6"
            />
            <a id="download" download={"image.jpg"}>Xóa kế hoạch đã lưu</a>
          </Button>
        </div>
        <Challenge
          type={style}
          edit={edit}
        />
      </div>
    </div>
  );
}
