import * as React from "react";
import { Loader, Loader2 } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva("h-5 w-5 animate-spin transition-all", {
  variants: {
    size: {
      sm: "h-5 w-5",
      md: "h-6 w-6",
      lg: "h-8 w-8",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  variant?: "spinner" | "circle";
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ variant = "spinner", size, className, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className="w-fit h-fit">
        {variant === "spinner" && (
          <Loader className={cn(spinnerVariants({ size }), className)} />
        )}
        {variant === "circle" && (
          <Loader2 className={cn(spinnerVariants({ size }), className)} />
        )}
      </div>
    );
  }
);

Spinner.displayName = "Spinner";
