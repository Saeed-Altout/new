"use client";

import * as React from "react";
import { Link } from "@/i18n/routing";
import { useMediaQuery } from "usehooks-ts";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BreadcrumbResponsiveProps {
  linksToShow?: number;
  links: {
    href?: string;
    label: string;
  }[];
}

export function BreadcrumbResponsive({
  linksToShow = 3,
  links = [],
}: BreadcrumbResponsiveProps) {
  const [open, setOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Breadcrumb className="flex justify-between items-center flex-col md:flex-row gap-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={links[0]?.href}>
            {links[0]?.label}
          </BreadcrumbLink>
        </BreadcrumbItem>

        {links.length > linksToShow && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {links.slice(1, -2).map((link, index) => (
                      <DropdownMenuItem key={index}>
                        <Link href={link.href ? link.href : "#"}>
                          {link.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>
                        Select a page to navigate to.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {links.slice(1, -2).map((link, index) => (
                        <Link
                          key={index}
                          href={link.href ? link.href : "#"}
                          className="py-1 text-sm"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
          </>
        )}

        {links.slice(-linksToShow + 1).map((link, index) => (
          <React.Fragment key={index}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {link.href ? (
                <BreadcrumbLink
                  asChild
                  className="max-w-20 truncate md:max-w-none"
                >
                  <Link href={link.href}>{link.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                  {link.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
      <div className="w-full md:w-fit flex items-center justify-between md:justify-end">
        <Button variant="ghost" size="xs">
          <ChevronLeft className="h-5 w-5" /> Previous
        </Button>
        <Button variant="ghost" size="xs">
          Next <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </Breadcrumb>
  );
}
