"use client";
import { MobxContext } from "@/context/mobxContext";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

export default observer(function HeaderNav() {
  const store = useContext(MobxContext);

  return (
    <nav className="nav">
      <button
        className={store.ActiveBlock != "Home" ? "link" : "underlined link"}
        onClick={(ev) => {
          window.scrollTo({
            top: store.ScrollBoxes.find((a) => a.name == "Home")?.scrollStart,
            behavior: "smooth",
          });
        }}
      >
        Home
      </button>
      <button
        className={store.ActiveBlock != "About" ? "link" : "underlined link"}
        onClick={(ev) => {
          window.scrollTo({
            top: store.ScrollBoxes.find((a) => a.name == "About")?.scrollStart,
            behavior: "smooth",
          });
        }}
      >
        About
      </button>
      <button
        className={store.ActiveBlock != "News" ? "link" : "underlined link"}
        onClick={(ev) => {
          window.scrollTo({
            top: store.ScrollBoxes.find((a) => a.name == "News")?.scrollStart,
            behavior: "smooth",
          });
        }}
      >
        News
      </button>
      <button
        className={store.ActiveBlock != "Contact" ? "link" : "underlined link"}
        onClick={(ev) => {
          window.scrollTo({
            top: store.ScrollBoxes.find((a) => a.name == "Contact")
              ?.scrollStart,
            behavior: "smooth",
          });
        }}
      >
        Contact
      </button>
    </nav>
  );
});
