"use client";
import { cx } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={cx([
        "hidden bg-white md:flex h-screen flex-col gap-0 transition-all duration-300 border-r md:sticky md:top-0 md:left-0",
        isCollapsed ? "w-[60px]" : "w-[250px]",
      ])}>
      <div className="p-3 w-full">
        <Image
          onClick={handleToggle}
          src="/logo.jfif"
          alt="Logo"
          width={35}
          height={35}
        />
      </div>

      <div className="p-3 flex flex-col">
        <div
          className={cx([
            "flex items-center rounded-md text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-gray-700",
          ])}>
          <div className="w-[35px] h-[35px] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
              aria-hidden="true">
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
          </div>
          <span
            className={cx([
              "flex-1 w-full overflow-hidden",
              isCollapsed ? "max-w-0" : "max-w-max",
            ])}>
            Dashboard
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
