import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("w-full space-y-2", {
  variants: {},
  defaultVariants: {},
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingVariants> {
  title: string;
  label?: string;
}

export const Heading = React.forwardRef<HTMLDivElement, HeadingProps>(
  ({ title, label, className, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn(headingVariants({}), className)}>
        <span className="text-base font-normal capitalize text-[#656565]">
          {label}
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#222222]">
          {title}
        </h2>
      </div>
    );
  }
);

Heading.displayName = "Heading";
