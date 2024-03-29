import React from "react";
import { UserButton } from "@clerk/nextjs";

export default function Nav() {
  return (
    <nav className="flex justify-between border px-4 py-4 text-black">
      <h1 className="text-lg font-bold">Challenge</h1>
      <div className="flex gap-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
}
