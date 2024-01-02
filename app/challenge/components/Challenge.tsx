"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { challenge } from "@/data/challenge";
import { cn } from "@/lib/utils";

export default function Challenge({
  type,
  edit,
}: {
  type: "default" | "carousel" | null | undefined;
  edit: boolean;
}) {
  if (type === "default") {
    return (
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {challenge[0].map((item, index) => (
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
                src={item.bg}
                alt="img"
                className="absolute top-0 right-0 left-0 bottom-0"
              />
              <span className="absolute bg-black/80 py-1 px-4 rounded-sm">Ngày {index + 1}</span>
            </div>
            <div className="border-x border-b py-2 px-2 overflow-hidden">
              <p className="text-center">{item.content}</p>
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
            {challenge[0].map((item, index) => (
              <CarouselItem key={index}>
                <div
                  className={`flex flex-col rounded-md bg-[url('https://picsum.photos/id/230/320/200')]`}
                >
                  <div className="h-[200px]  rounded-ss-md rounded-se-md flex justify-center items-center font-bold text-xl text-white">
                    <span className="bg-black/80 py-2 px-4 rounded-md">
                      Ngày {index + 1}
                    </span>
                  </div>
                  <div className="border-x border-b py-2 px-2 overflow-hidden bg-white">
                    {!edit ? (
                      <p className="text-center">{item.content}</p>
                    ) : (
                      <input
                        className="w-full border py-1 px-2 border-sky-500 outline-none rounded-sm"
                        type="text"
                        defaultValue={
                          "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        }
                      />
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
