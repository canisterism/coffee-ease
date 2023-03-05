import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <nav className="bg-yellow-700 p-2.5 container mx-auto flex justify-between">
      <Logo />
      <HamburgerMenuButton />
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

const HamburgerMenuButton = () => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="white"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 8l16 0"></path>
        <path d="M4 16l16 0"></path>
      </svg>
    </div>
  );
};
