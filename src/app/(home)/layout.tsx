import React from "react";
import { Header } from "./components";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex min-w-0 flex-col gap-8 bg-rewoven-ivory pt-8">{children}</div>
    </>
  );
}
