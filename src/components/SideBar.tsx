import React, { useCallback, useState } from "react";

export const useSideBar = () => {
  const [isSideBarVisible, setSideBarVisible] = useState<boolean>(false);

  const toggleSideBar = useCallback(() => {
    setSideBarVisible((prev) => {
      console.dir(prev);
      return !prev;
    });
  }, []);

  return [isSideBarVisible, toggleSideBar] as const;
};

type MenuProps = {
  onClick: () => void;
};

export const HamburgerMenuButton: React.FC<MenuProps> = ({ onClick }) => {
  return (
    <button id="sidebarToggle" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="white"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M4 8l16 0"></path>
        <path d="M4 16l16 0"></path>
      </svg>
    </button>
  );
};

type SideBarProps = {
  visible: boolean;
};
export const SideBar: React.FC<SideBarProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div
      id="sidebar"
      className="fixed top-0 right-0 w-64 bg-gray-900 h-full pt-20 z-10  lg:block"
    >
      <div className="px-4 text-white">
        <p className="text-lg font-bold">My App</p>
        <ul className="mt-6">
          <li className="mb-4">
            <a
              className="block py-2 px-4 text-sm font-semibold text-gray-400 hover:bg-gray-800 hover:text-white rounded transition duration-200"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="mb-4">
            <a
              className="block py-2 px-4 text-sm font-semibold text-gray-400 hover:bg-gray-800 hover:text-white rounded transition duration-200"
              href="#"
            >
              About
            </a>
          </li>
          <li className="mb-4">
            <a
              className="block py-2 px-4 text-sm font-semibold text-gray-400 hover:bg-gray-800 hover:text-white rounded transition duration-200"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
