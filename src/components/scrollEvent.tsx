"use client";
import { MobxContext } from "@/context/mobxContext";
import React, { useContext, useEffect } from "react";

export default function scrollEvent() {
  const store = useContext(MobxContext);
  useEffect(() => {
    window.addEventListener("scroll", (ev) => {
      store.setScroll(window.scrollY + window.innerHeight / 2);
    });
  }, []);
  return <></>;
}
