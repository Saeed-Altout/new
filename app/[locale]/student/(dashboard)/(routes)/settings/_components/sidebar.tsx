"use client";

import { cn } from "@/lib/utils";
import { Bell, IdCard, Lock, LucideIcon, User } from "lucide-react";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const links: {
    id: number;
    label: string;
    href: string;
    icon: LucideIcon;
  }[] = [
    {
      id: 0,
      label: "My profile",
      href: "/student/settings/profile",
      icon: User,
    },
    {
      id: 1,
      label: "Change password",
      href: "/student/settings/password",
      icon: Lock,
    },
    {
      id: 2,
      label: "Payment method",
      href: "/student/settings/payment",
      icon: IdCard,
    },
    {
      id: 3,
      label: "Notifications",
      href: "/student/settings/notifications",
      icon: Bell,
    },
  ];
  return (
    <div className="bg-[#F8F8F8] w-[385px] p-10 space-y-8 hidden md:flex flex-col items-start justify-between">
      <h3 className="text-[#383838] text-2xl font-medium">Account</h3>
      <ul className="flex-1 w-full space-y-3">
        {links.map(({ href, label, icon: Icon }, index) => (
          <li key={index}>
            <Link
              href={href}
              className={cn(
                "flex items-center gap-3 py-4 px-6 border-l-4 border-transparent hover:bg-white hover:border-[#656565] duration-300 ease-in-out",
                pathname.includes(href) && "bg-white border-[#656565]"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
