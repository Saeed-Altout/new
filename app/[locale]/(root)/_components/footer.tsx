import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Facebook, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ctx = useTranslations("Footer");

  const links = [
    {
      id: 0,
      title: ctx("title"),
      links: [
        { id: 0, name: ctx("links.0.name"), href: "/about-us" },
        { id: 1, name: ctx("links.1.name"), href: "/career" },
        { id: 2, name: ctx("links.2.name"), href: "/blog" },
        { id: 3, name: ctx("links.3.name"), href: "/contact-us" },
      ],
    },
    {
      id: 1,
      title: ctx("for_businesses.title"),
      links: [
        {
          id: 0,
          name: ctx("for_businesses.links.0.name"),
          href: "/corporate-training",
        },
        {
          id: 1,
          name: ctx("for_businesses.links.1.name"),
          href: "/digital-transformation",
        },
      ],
    },
    {
      id: 2,
      title: ctx("work_with_us.title"),
      links: [
        { id: 0, name: ctx("work_with_us.links.0.name"), href: "/blog-guest" },
      ],
    },
  ];

  return (
    <footer className="pt-16 pb-8 bg-[#222222]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-medium">{ctx("social")}</h3>
            <div className="flex gap-4">
              <Button
                size="icon"
                asChild
                className="rounded-full bg-[#383838] hover:bg-[#383838] hover:text-[#FDC511] duration-300 ease-in-out"
              >
                <Link href="/" target="_blank">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button
                size="icon"
                asChild
                className="rounded-full bg-[#383838] hover:bg-[#383838] hover:text-[#FDC511] duration-300 ease-in-out"
              >
                <Link href="/" target="_blank">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Linkedin</span>
                </Link>
              </Button>
              <Button
                size="icon"
                asChild
                className="rounded-full bg-[#383838] hover:bg-[#383838] hover:text-[#FDC511] duration-300 ease-in-out"
              >
                <Link href="/" target="_blank">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
          {links.map((link, index) => (
            <div key={index} className="flex flex-col gap-5">
              <h3 className="text-white font-medium">{link.title}</h3>
              <ul className="flex flex-col gap-4">
                {link.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-[#999999] font-normal whitespace-nowrap hover:underline hover:text-white duration-300 ease-in-out"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-5">
          <Link href="/" className="h-full flex justify-center items-center">
            <Image
              src="/logo-dark.svg"
              alt="E-In-Akademie Logo Light"
              width={139.75}
              height={33.27}
              priority
            />
          </Link>
          <p className="text-white font-normal text-sm">
            © {currentYear} In Akademie, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
