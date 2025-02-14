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
  const ref = useRef<HTMLImageElement | null>(null);
  gsap.registerPlugin(useGSAP);
  const { contextSafe } = useGSAP({ scope: ref });

  const anim = contextSafe(() => {
    const tl = gsap.timeline();
    setTl(tl);
    const randX =
      (window.innerWidth / 100) * 1 -
      Math.floor(Math.random() * (window.innerWidth / 100) * 2);
    const randY =
      (window.innerWidth / 100) * 1 -
      Math.floor(Math.random() * (window.innerWidth / 100) * 2);
    const scale = 1 + Math.floor(Math.random());
    tl.to(
      ref.current,
      {
        x: randX,
        y: randY,
        duration: 5,
        ease: "none",
        transform: `scale (${scale})`,
      },
      0
    );
  });

  const startAnim = () => {
    anim();
    tl?.play();
  };

  useEffect(() => {
    startAnim();
    setInterval(() => {
      startAnim();
    }, 10000);
  }, []);
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
