import React from "react";
import { Indie_Flower } from "next/font/google";
import { challenge } from "@/data/challenge";

const roboto = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
});

export default function page() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="container max-w-screen-lg p-4 text-center ">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-start">30 DAY</h1>
          <div className={roboto.className}>
            <h1 className="text-5xl bg-[#E3DFDE]">Xây dựng kênh truyền thông</h1>
          </div>
          <h1 className="text-end text-3xl font-bold">CHALLENGE</h1>
          <p className="text-start flex gap-2 items-center"><img src="/icons/user.svg" alt="user_icon" className="w-4 h-4" /> Nguyễn Hải Yến</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 border-t-4 border-l-4 border-slate-800 mt-12">
            {challenge[0].challenges.map((item,index) => (
                <div key={index} className="relative border-b-4 border-r-4 h-[200px] border-slate-800 flex flex-col">
                    <img src="/imgs/check.png" alt="check" className="absolute bottom-2 left-1/2 -translate-x-1/2 h-[120px] opacity-75" />
                    <div className="bg-[#E3DFDE] h-8 flex justify-center items-center text-3xl font-bold">
                        <h1 className="translate-y-3">Day {item.id}</h1>
                    </div>
                    <div className="flex-1 flex justify-center items-center"><p className="text-center p-4">{item.challenge}</p></div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
