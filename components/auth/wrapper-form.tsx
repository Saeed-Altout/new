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

interface WrapperFormProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  google?: boolean;
  facebook?: boolean;
}

export const WrapperForm = React.forwardRef<HTMLDivElement, WrapperFormProps>(
  ({ title, google, facebook, children, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        {...props}
        className="border-none shadow-none max-w-[576px] w-full"
      >
        <CardHeader>
          <CardTitle className="text-4xl">{title}</CardTitle>
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
