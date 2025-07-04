"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Square, Sun } from "lucide-react";
import links from "@/app/links";
import { Tooltip } from "antd";
import { toggleTheme } from "@/redux/features/theme-slice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useAppSelector((state) => state.themeReducer.value.lightMode);
  const currentLocation = usePathname();
  return (
    <>
      <header>
        <nav className="flex justify-between items-center w-[94%] mx-auto my-4">
          <div className="logo flex items-center">
            <Link href="/" className="block">
              <Image
                src="/hikar-logo.png"
                alt="Hikar Logo"
                width={120}
                height={50}
                priority
                className="w-auto h-12 object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:min-h-fit lg:flex items-center px-5">
            <ul className="flex md:flex-row md:items-center gap-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={` mx-4 hover:text-teal text-[18px]
                    ${
                      currentLocation.startsWith(link.href) &&
                      (currentLocation[link.href.length] === "/" ||
                        currentLocation.length === link.href.length) &&
                      "border-b-[3px] border-teal"
                    }
                  `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            {theme ? (
              <Tooltip title="Switch to Dark Mode" placement="bottomLeft">
                <Moon
                  onClick={() => dispatch(toggleTheme())}
                  className="cursor-pointer"
                />
              </Tooltip>
            ) : (
              <Tooltip title="Switch to Light Mode" placement="bottomLeft">
                <Sun
                  onClick={() => dispatch(toggleTheme())}
                  className="cursor-pointer"
                />
              </Tooltip>
            )}
            <details className="dropdown dropdown-end lg:hidden">
              <summary className="btn m-1">
                <Menu />
              </summary>
              <ul className="dropdown-content menu bg-base-100 rounded-box z-[999] w-52 p-2 shadow">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-secondaryText mx-2
                        ${
                          currentLocation.startsWith(link.href) &&
                          (currentLocation[link.href.length] === "/" ||
                            currentLocation.length === link.href.length) &&
                          "bg-primary text-white"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </nav>
      </header>
    </>
  );
}
