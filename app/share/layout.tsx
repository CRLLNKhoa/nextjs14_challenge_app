import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
      <div className="px-4 mt-12 pb-2 bg-slate-100 pt-2 flex justify-between items-center">
        <p className="text-xs">@Create by Lương Khoa</p>
        <div>
          <a href="https://www.facebook.com/lnkhoa1205/" target="_blank">
            <img src="/icons/fb.svg" alt="logo_fb" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
