import * as React from "react";

import { usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoogleProvider } from "./google-provider";
import { FacebookProvider } from "./facebook-provider";

import { cn } from "@/lib/utils";
import { Role } from "@/config/enums";

interface WrapperFormProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  google?: boolean;
  facebook?: boolean;
  role?: string;
}

export const WrapperForm = React.forwardRef<HTMLDivElement, WrapperFormProps>(
  ({ title, role, google, facebook, className, children, ...props }, ref) => {
    const pathname = usePathname();
    const ctx = useTranslations(
      pathname.includes("auth") ? "LoginPage" : "RegisterPage"
    );

    return (
      <Card
        ref={ref}
        {...props}
        className={cn(
          "border-none shadow-none max-w-[576px] w-full",
          className
        )}
      >
        <CardHeader>
          <CardTitle className="relative text-4xl w-fit">
            {title}
            {role === Role.COMPANY && (
              <span className="absolute left-[105%] top-[70%] text-base font-normal capitalize">
                {role}
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {(google || facebook) && (
          <CardFooter className="w-full flex-col gap-4 justify-between items-start">
            <p>{ctx("message")}</p>
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
              {google && <GoogleProvider />}
              {facebook && <FacebookProvider />}
            </div>
          </CardFooter>
        )}
      </Card>
    );
  }
);

WrapperForm.displayName = "WrapperForm";
