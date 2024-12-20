"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { User } from "lucide-react";

const navBar = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/About",
  },
  {
    title: "Shop",
    link: "/Shop",
  },
  {
    title: "Contact",
    link: "/Contact",
  },
];

const Navbar = () => {
  return (
    <header className="px-5 py-5 lg:px-24 bg-white/60 shadow-md fixed w-full z-[50]">
      <nav className="w-full flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="w-28 h-8 object-contain" />
        </Link>
        <div className="gap-10 hidden sm:flex">
          <ul className="flex gap-10 md:gap-14">
            {navBar.map((nav, index) => (
              <Link href={nav.link} key={index}>
                <li className="text-lg hover:text-primary duration-300">
                  {nav.title}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex items-center gap-6">
            <div className="relative">
              <ShoppingBag className="cursor-pointer" />
              <div className="bg-black w-6 h-6 rounded-full absolute -top-4 left-5">
                <span className="flex justify-center items-center text-white">
                  0
                </span>
              </div>
            </div>
            <User className="cursor-pointer" />
          </div>
        </div>
        <div className="sm:hidden">
          <DropdownMenu>
            <div className="flex gap-6 items-center">
              <div className="relative">
                <ShoppingBag className="size-6 md:size-10 cursor-pointer" />
                <div className="bg-black w-6 h-6 rounded-full absolute -top-4 left-5">
                  <span className="flex justify-center items-center text-white">
                    0
                  </span>
                </div>
              </div>
              <DropdownMenuTrigger>
                <Menu className="size-6 md:size-10" />
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent>
              <ul>
                {navBar.map((nav, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={nav.link} key={index}>
                      <li>{nav.title}</li>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </ul>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
