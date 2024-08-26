"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/contants/appdata";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  const [isMenu, setIsMenu] = useState(false);
  console.log(pathname);
  return (
    <div className="bg-black shadow-lg h-16 flex justify-between items-center md:px-[10%]">
      <Link
        href="/"
        className="black-third-color font-bold text-2xl pl-5 md:pl-0"
      >
        Code Scrapper
      </Link>
      <div
        className="md:hidden flex flex-col gap-1 pr-5"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
        <div className="w-5 h-0.5 bg-black"></div>
      </div>
      <div
        className={` ${
          isMenu ? "flex flex-col absolute top-16 w-full" : "hidden md:flex"
        } gap-5 md:flex-row md:static bg-black md:w-auto text-center`}
      >
        {links?.map((link) => (
          <div key={link.link}>
            <Link
              className={`${
                pathname === link.link ? "text-third-color" : "text-white-400"
              }`}
              href={link.link}
              exact={link.exact}
            >
              <span>{link.text}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
