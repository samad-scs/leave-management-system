"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { useState } from "react";
import { Avatar } from "@nextui-org/avatar";

export const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">LMS</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <Avatar
            showFallback
            src="https://images.unsplash.com/broken"
            size="sm"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2"></div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
