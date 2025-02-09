"use client";
import { mainStore } from "@/store/main";
import { createContext } from "react";

export const MobxContext = createContext(new mainStore());
