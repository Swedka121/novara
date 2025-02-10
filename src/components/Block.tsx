"use client";
import { MobxContext } from "@/context/mobxContext";
import React, { Ref, useContext, useEffect, useRef } from "react";

export default function Block({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  const store = useContext(MobxContext);
  const ref: Ref<any> = useRef(0);

  useEffect(() => {
    store.addScrollBox({
      name,
      scrollEnd: ref.current?.offsetTop + ref.current?.clientHeight,
      scrollStart: ref.current?.offsetTop,
    });
  }, []);
  return (
    <div className="fully" ref={ref}>
      {children}
    </div>
  );
}
