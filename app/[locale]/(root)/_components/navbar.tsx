"use client";

import * as React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";

import { useGetCategories } from "@/hooks/use-get-categories";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { data: categories } = useGetCategories();
  const ctx = useTranslations("Navbar");

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
            <NavigationMenuTrigger disabled={!categories}>
              {ctx("links.0.name")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="min-h-[73px] flex justify-start items-center flex-wrap gap-x-4 gap-y-4 py-5">
                {categories?.map((item, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="ghost"
                    className="text-[#656565]"
                  >
                    {item.title}
                  </Button>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={"/"} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {ctx("links.1.name")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "flex items-center space-x-2",
                navigationMenuTriggerStyle()
              )}
            >
              <Switch id="private-customer" />
              <Label htmlFor="private-customer">{ctx("links.2.name")}</Label>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <div className="h-full ml-auto hidden lg:flex justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-2">
            <Button asChild size="icon" variant="outline">
              <Link href="/advanced-search">
                <Image
                  src="/search.svg"
                  alt="Search Icon"
                  width={20}
                  height={20}
                  priority
                  className="object-contain"
                />
                <span className="sr-only">Search</span>
              </Link>
            </Button>
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
          <LanguageSwitcher />
          <Button asChild>
            <Link href="/student/auth/login">
              {ctx("login")} <span className="sr-only">{ctx("login")}</span>
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
