"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/routing";

export const Sidebar = () => {
  const pathname = usePathname();

  const ctx = useTranslations(
    pathname.includes("login") ? "LoginPage" : "RegisterPage"
  );

  const [url, setUrl] = useState<{
    href: string;
    message: string;
    label: string;
  } | null>(null);

  const redirectTo = (pathname: string) => {
    if (pathname.includes("/student/auth/login")) {
      return {
        href: "/student/auth/register",
        message: ctx("back-button-message"),
        label: ctx("back-button-label"),
      };
    } else if (pathname.includes("/student/auth/register")) {
      return {
        href: "/student/auth/login",
        message: ctx("back-button-message"),
        label: ctx("back-button-label"),
      };
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (!!pathname) {
      const currentUrl = redirectTo(pathname);
      setUrl(currentUrl);
    }
  }, [pathname]);

  return (
    <div className="relative hidden lg:flex bg-[#F8F8F8] justify-center items-center">
      <span className="absolute top-12 left-20 text-[#383838] text-2xl font-normal">
        {ctx("welcome")}
      </span>
      <Link href="/">
        <Image
          src="/logo-light.svg"
          alt="E-In-Akademie Logo Light"
          width={1000}
          height={1000}
          priority
          className="object-contain w-[320px] h-[76.29px]"
        />
      </Link>
      {url && (
        <p className="absolute bottom-12 left-20 text-[#383838] text-base font-normal">
          {url.message}{" "}
          <Link href={url.href} className="font-medium hover:underline">
            {url.label}
          </Link>
        </p>
      )}
    </div>
  );
};
