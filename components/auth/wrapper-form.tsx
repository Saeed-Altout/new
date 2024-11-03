import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoogleProvider } from "./google-provider";
import { FacebookProvider } from "./facebook-provider";
import { Role } from "@/config";
import { cn } from "@/lib/utils";

interface WrapperFormProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  google?: boolean;
  facebook?: boolean;
  role?: Role;
}

export const WrapperForm = React.forwardRef<HTMLDivElement, WrapperFormProps>(
  ({ title, role, google, facebook, className, children, ...props }, ref) => {
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
            {role && (
              <span className="absolute left-[105%] top-[70%] text-base font-normal capitalize">
                {role}
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {(google || facebook) && (
          <CardFooter className="w-full flex-col gap-4 justify-between items-start">
            <p>Or sign in with</p>
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
