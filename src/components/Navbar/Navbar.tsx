"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { User } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
  const [open, setOpen] = useState<boolean>();

  return (
    <header className="px-5 py-8 lg:px-24 bg-transparent fixed w-full z-[50]">
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
            <ShoppingBag className="cursor-pointer" />
            <User className="cursor-pointer" />
          </div>
        </div>
        <div className="sm:hidden">
          <DropdownMenu>
            <div className="flex gap-6 items-center">
              <ShoppingBag className="size-10 cursor-pointer" />
              <DropdownMenuTrigger
                onClick={() => setOpen((prev) => !prev)}
                className="w-12 h-12 bg-black"
              >
                {open ? (
                  <Menu color="white" className="mx-auto" />
                ) : (
                  <X color="white" className="mx-auto" />
                )}
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
