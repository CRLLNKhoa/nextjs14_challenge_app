import React, { ReactNode } from "react";
import Nav from "./components/Nav";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      {children}
    </div>
  );
}
