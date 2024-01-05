"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useStoreChallenge } from "@/store/challenge";
import { TChallenge } from "@/types";
import { cn } from "@/lib/utils";

export default function Challenge({
  type,
  edit,
}: {
  type: "default" | "carousel" | null | undefined;
  edit: boolean;
}) {
  const challenge = useStoreChallenge((state: any) => state.challenge);
  const challengeEdit = useStoreChallenge((state: any) => state.challengeEdit);
  const setChallengeEdit = useStoreChallenge(
    (state: any) => state.setChallengeEdit
  );
  const [data, setData] = useState(challenge);

  useEffect(() => {
    setData(challenge);
  }, [challenge]);

  function handleChangeEdit(id: any, challenge: object | null | "" | undefined) {
    const index = data.findIndex((item: { id: number }) => item.id === id);
    if (index !== -1) {
      // Tìm thấy phần tử với ID đã cho
      // Cập nhật phần tử tại vị trí index
      data[index] = { ...data[index], ...challenge };
      setChallengeEdit(data);
      return true; // Trả về true để thể hiện rằng cập nhật đã thành công
    }

    // Không tìm thấy phần tử với ID đã cho
    return false; // Trả về false để thể hiện rằng không có phần tử nào được cập nhật
  }

  function reverseAValue(id: any,checked: boolean | any) {
    const index = data.findIndex((item: { id: number }) => item.id === id);
    if (index !== -1) {
      // Tìm thấy phần tử với ID đã cho
      // Cập nhật phần tử tại vị trí index
      data[index] = { ...data[index], ...{complete: checked} };
      setChallengeEdit(data);
      return true; // Trả về true để thể hiện rằng cập nhật đã thành công
    }

    // Không tìm thấy phần tử với ID đã cho
    return false; // Trả về false để thể hiện rằng không có phần tử nào được cập nhật
  }

  if (data.length === 0) {
    return (
      <div className="mt-12 flex justify-center items-center flex-col">
        <img
          src="/icons/notdata.svg"
          alt="not"
          className="w-[100px] mb-4 opacity-80"
        />
        <h1 className="text-lg">Bạn chưa tạo kế hoạch</h1>
      </div>
    );
  }

  if (type === "default") {
    return (
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-slate-100 p-4 rounded-md">
        {data.map((item: TChallenge, index: number) => (
          <div
            key={item.id}
            className="flex flex-col rounded-md"
          >
            <div
              className={
                "h-[200px] relative rounded-ss-md rounded-se-md flex justify-center items-center font-bold text-xl text-white"
              }
            >
              <img
                loading="lazy"
                src={item.bg}
                alt="img"
                className="absolute top-0 right-0 left-0 bottom-0 w-full h-full object-fill"
              />
              <span className="absolute bg-black/80 py-1 px-4 rounded-sm">
                Ngày {index + 1}
              </span>
            </div>
            <div className="border-x border-b py-2 px-2 overflow-hidden bg-white">
              {!edit ? (
                <p
                  className={cn(
                    "text-center",
                    item.complete && "line-through"
                  )}
                >
                  {item.challenge}
                </p>
              ) : (
                <input
                  className="w-full border py-1 px-2 border-sky-500 outline-none rounded-sm"
                  type="text"
                  defaultValue={item.challenge}
                  onChange={(e) =>
                    handleChangeEdit(item.id, { content: e.target.value })
                  }
                />
              )}
              {edit && (
                <div className="flex gap-4">
                  <label htmlFor={`id_${item.id}`}>Đã hoàn thành:</label>
                  <input
                    onChange={(e) => reverseAValue(item.id, {complete: e.target.checked})}
                    type="checkbox"
                    defaultChecked={item.complete}
                    id={`id_${item.id}`}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "carousel") {
    return (
      <div className="flex justify-center mt-6 flex-1">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs"
        >
          <CarouselContent>
            {data.map((item: TChallenge, index: number) => (
              <CarouselItem key={index}>
                <div className={`flex flex-col rounded-md`}>
                  <div className="h-[200px] relative rounded-ss-md rounded-se-md flex justify-center items-center font-bold text-xl text-white">
                    <div className="absolute">
                      <img
                        src={item.bg}
                        alt=""
                      />
                    </div>
                    <span className="bg-black/80 py-2 px-4 rounded-md absolute">
                      Ngày {index + 1}
                    </span>
                  </div>
                  <div className="border-x border-b py-2 px-2 overflow-hidden bg-white">
                    {!edit ? (
                      <p className={cn("text-center", item.complete && "line-through")}>{item.challenge}</p>
                    ) : (
                      <input
                        className="w-full border py-1 px-2 border-sky-500 outline-none rounded-sm"
                        type="text"
                        defaultValue={item.challenge}
                        onChange={(e) =>
                          handleChangeEdit(item.id, { content: e.target.value })
                        }
                      />
                    )}
                      {edit && (
                <div className="flex gap-4 mt-2 cursor-pointer">
                  <label className="cursor-pointer" htmlFor={`id_${item.id}`}>Đã hoàn thành:</label>
                  <input
                    onChange={(e) => reverseAValue(item.id, {complete: e.target.checked})}
                    type="checkbox"
                    defaultChecked={item.complete}
                    id={`id_${item.id}`}
                  />
                </div>
              )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }
}
