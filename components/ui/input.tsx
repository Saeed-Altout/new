import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, className, type, ...props }, ref) => {
    return (
      <>
        {Icon ? (
          <div className="relative group/input flex justify-end items-center w-12 hover:w-[300px] h-12 duration-300 ease-in-out">
            <Icon className="absolute top-[50%] left-[50%] translate-x-[-50%] group-hover/input:left-4 group-hover/input:translate-x-0 translate-y-[-50%] h-5 w-5 -mt-px text-[#999999]" />
            <input
              type={type}
              className={cn(
                "flex h-12 w-full rounded-[3px] border border-input bg-background pl-4 group-hover/input:pl-12 pr-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:opacity-0 group-hover/input:placeholder:opacity-100 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              ref={ref}
              {...props}
            />
          </div>
        ) : (
          <input
            type={type}
            className={cn(
              "flex h-12 w-full rounded-[3px] border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };
