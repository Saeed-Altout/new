"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onOpenChange = (open: boolean) => {
    if (!open) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent className="flex flex-col gap-8">
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <Image
                  src="/logo-light.svg"
                  alt="E-In-Akademie Logo Light"
                  width={139.75}
                  height={33.27}
                  priority
                />
              </Link>
            </SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <NavigationMenu className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Link href="/" className="h-full flex justify-center items-center">
          <Image
            src="/logo-light.svg"
            alt="E-In-Akademie Logo Light"
            width={139.75}
            height={33.27}
            priority
          />
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="min-h-[73px] flex justify-start items-center flex-wrap gap-x-8 gap-y-4 py-5">
                {[
                  "E-CHECK",
                  "TETRA",
                  "ELECTROMOBILITY",
                  "TREI",
                  "SAFETY TECHNOLOGY",
                  "TECHNOLOGY",
                  "STANDARDS & OCCUPATIONAL SAFETY",
                  "ONLINE SEMINARS",
                ].map((item, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="ghost"
                    className="text-[#656565]"
                  >
                    {item}
                  </Button>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                In Akademie Business
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="h-full ml-auto hidden lg:flex justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-2">
            <Input placeholder="Search.." icon={Search} />
            <Button asChild size="icon" variant="outline">
              <Link href="/">
                <Image
                  src="/shop.svg"
                  alt="Shop Icon"
                  width={20}
                  height={20}
                  priority
                  className="object-contain"
                />
                <span className="sr-only">Shop Icon</span>
              </Link>
            </Button>
          </div>
          <Button asChild>
            <Link href="/auth/login">
              Login <span className="sr-only">Login</span>
            </Link>
          </Button>
        </div>
        <div className="h-full ml-auto inline-flex lg:hidden justify-center items-center">
          <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu Icon</span>
          </Button>
        </div>
      </NavigationMenu>
    </>
  );
};
