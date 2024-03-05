import React from "react";
import { Header } from "./components";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="bg-rewoven-ivory flex flex-col gap-8 pt-8">{children}</div>
    </>
  );
}
