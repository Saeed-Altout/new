"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Menu } from "lucide-react";
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
import { Button } from "@/components/ui/button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

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
      <div className="flex justify-start items-center h-20 gap-x-[100px] max-w-screen-xl mx-auto px-4 md:px-8">
        <Link href="/">
          <Image
            src="/logo-light.svg"
            alt="E-In-Akademie Logo Light"
            width={139.75}
            height={33.27}
            priority
          />
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
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
        </NavigationMenu>
        <div className="ml-auto hidden lg:flex justify-center items-center gap-3">
          <div className="flex justify-center items-center gap-2">
            <Button asChild size="icon" variant="outline">
              <Link href="/">
                <Image
                  src="/search.svg"
                  alt="Search Icon"
                  width={20}
                  height={20}
                  priority
                  className="object-contain"
                />
                <span className="sr-only">Search Icon</span>
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
          <Button asChild>
            <Link href="/auth/login">
              Login <span className="sr-only">Login</span>
            </Link>
          </Button>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="inline-flex lg:hidden ml-auto"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu Icon</span>
        </Button>
      </div>
    </>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
