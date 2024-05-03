"use client";
import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>();

  return (
    <nav className="bg-white flex items-center justify-between h-15 relative px-5 py-2">
      <Link href="#home">
        <h1 className="text-3xl font-medium">SOBHA</h1>
      </Link>
      <ul
        className="bg-[#EEF7FF] h-screen w-1/2 flex  z-50 left-[-500px] transition-all gap-y-3 top-0 absolute flex-col lg:flex-row lg:static lg:bg-transparent lg:w-auto lg:h-auto  "
        ref={ref}
      >
        <div className="flex items-center justify-between lg:hidden">
          <Link href="#home" className="p-5 ">
            <h1 className="text-3xl font-medium ">SOBHA</h1>
          </Link>
          {isOpen && (
            <IoMdClose
              size={35}
              className="p-1 cursor-pointer lg:hidden"
              onClick={(e) => {
                e.preventDefault();
                ref?.current?.classList.remove("show_nav");
                setIsOpen(false);
              }}
            />
          )}
        </div>

        <li className="px-5 py-2 transition-all hover:bg-[#FFC100]  lg:rounded-md">
          <Link href="#home">HOME</Link>
        </li>
        <li className="px-5 py-2 transition-all hover:bg-[#FFC100] lg:rounded-md">
          <Link href="#about">ABOUT</Link>
        </li>
        <li className="px-5 py-2 transition-all hover:bg-[#FFC100] lg:rounded-md">
          <Link href="#payment-plan">PAYMENT PLAN</Link>
        </li>
        <li className="px-5 py-2 transition-all hover:bg-[#FFC100] lg:rounded-md">
          <Link href="#floor-plan">FLOOR PLAN</Link>
        </li>
        <li className="px-5 py-2 transition-all hover:bg-[#FFC100] lg:rounded-md">
          <Link href="#amenities">AMENITIES</Link>
        </li>
        <li className="px-5 py-2 transition-all hover:bg-[#FFC100] lg:rounded-md">
          <Link href="#contact">CONTACT</Link>
        </li>
      </ul>
      {!isOpen && (
        <GiHamburgerMenu
          size={35}
          className="p-1 cursor-pointer lg:hidden"
          onClick={(e) => {
            e.preventDefault();
            ref?.current?.classList.add("show_nav");
            setIsOpen(true);
          }}
        />
      )}
    </nav>
  );
}

export default Nav;
