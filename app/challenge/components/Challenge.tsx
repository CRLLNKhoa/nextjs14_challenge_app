"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
        {Array.from({ length: 30 }, (_, index) => index + 1).map(
          (item, index) => (
            <div
              key={item}
              className="flex flex-col rounded-md"
            >
              <div className="h-[200px] bg-sky-500 rounded-ss-md rounded-se-md flex justify-center items-center font-bold text-xl text-white">
                <span>Ngày {index + 1}</span>
              </div>
              <div className="border-x border-b py-2 px-2 overflow-hidden">
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          )
        )}
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
            {Array.from({ length: 5 }).map((_, index) => (
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
                      <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
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
