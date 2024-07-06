"use client";

import UserTime from "@/app/(components)/components/UserTime";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";
import ThemeSwitcher from "./../app/(components)/components/ThemeSwitcher";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <Link className="pe-5 text-black dark:text-white" href="/">
            Frontend
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            }`}
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/useComponents"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            }`}
            href="/useComponents"
          >
            useComponents
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={`  pe-5 ${
              pathname === "/Different"
                ? "font-bold text-red-500"
                : "text-black dark:text-white"
            }`}
            href="/Different"
          >
            Different
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden items-center gap-5 sm:flex">
          <UserTime />
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
