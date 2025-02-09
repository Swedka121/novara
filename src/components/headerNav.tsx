"use client";
import { MobxContext } from "@/context/mobxContext";
import Link from "next/link";
import React, { useContext } from "react";

export default function HeaderNav() {
  const store = useContext(MobxContext);

  return store && typeof window !== "undefined" ? (
    <nav className="nav">
      <Link
        className={
          store.getActiveBlock() != "Home" ? "link" : "underlined link"
        }
        href="#home"
      >
        Home
      </Link>
      <Link
        className={
          store.getActiveBlock() != "About" ? "link" : "underlined link"
        }
        href="#about"
      >
        About
      </Link>
      <Link
        className={
          store.getActiveBlock() != "News" ? "link" : "underlined link"
        }
        href="#news"
      >
        News
      </Link>
      <Link
        className={
          store.getActiveBlock() != "Contact" ? "link" : "underlined link"
        }
        href="#contact"
      >
        Contact
      </Link>
    </nav>
  ) : null;
}
