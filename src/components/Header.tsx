"use client";
import Link from "next/link";
import React from "react";
import { HamburgerMenuButton, SideBar, useSideBar } from "./SideBar";

export const Header = () => {
  const [visible, toggleSideBar] = useSideBar();

  return (
    <nav className="bg-yellow-700 p-2.5  mx-auto flex justify-between">
      <Logo />
      <HamburgerMenuButton onClick={toggleSideBar} />
      <SideBar visible={visible} />
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <span className="text-white text-lg tracking-wider font-semibold">
        ease
      </span>
    </Link>
  );
};
