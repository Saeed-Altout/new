import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

import { links } from "@/constants";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-[#222222]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-20">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-medium">Follow us</h3>
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
              src="/logo-light.svg"
              alt="E-In-Akademie Logo Light"
              width={139.75}
              height={33.27}
              priority
            />
          </Link>
          <p className="text-white font-normal text-sm">
            © 2023 In Akademie, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
