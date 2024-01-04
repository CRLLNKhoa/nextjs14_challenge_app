import React, { ReactNode } from "react";
import Nav from "./components/Nav";
import ReadUser from "./components/ReadUser";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      {children}
      <ReadUser />
    </div>
  );
}
