"use client";
import { MobxContext } from "@/context/mobxContext";
import useStore from "@/store/_index";
import React from "react";

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const store = useStore({ store: { activeBlock: "Home" } });
  return <MobxContext.Provider value={store}>{children}</MobxContext.Provider>;
}
