"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";

export default function Logo({
  service,
  url,
}: {
  service: string;
  url: string;
}) {
  const [tl, setTl] = useState<GSAPTimeline>();
  const [randX, setRandX] = useState<number>(
    5 - Math.floor(Math.random() * 10)
  );
  const [randY, setRandY] = useState<number>(
    5 - Math.floor(Math.random() * 10)
  );
  const ref = useRef<HTMLImageElement | null>(null);
  gsap.registerPlugin(useGSAP);
  const { contextSafe } = useGSAP({ scope: ref });

  const anim = contextSafe(() => {
    const tl = gsap.timeline();
    setTl(tl);

    tl.to(
      ref.current,
      {
        x: randX,
        y: randY,
        duration: 50,
      },
      0
    );
  });

  useEffect(() => {
    setInterval(() => {
      setRandX(100 - Math.floor(Math.random() * 200));
      setRandY(100 - Math.floor(Math.random() * 200));
      anim();
      tl?.play();
    }, 10000);
  });
  return (
    <a href={url}>
      <img
        ref={ref}
        className={service}
        src={"/images/" + service + "-svgrepo-com.svg"}
      ></img>
    </a>
  );
}
