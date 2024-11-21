import React from "react";
import { cn } from "@/lib/utils";

import { Skeleton } from "@/components/ui/skeleton";

interface CategoryCardProps {
  category: {
    id: number;
    title: string;
    courses_number: number;
  };
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="bg-white rounded-[5px] p-4 space-y-2 hover:-translate-y-2 duration-300 ease-in-out">
      <h3
        className={cn(
          "font-medium leading-8 relative before:absolute before:h-full before:w-1 before:content-[''] before:bg-primary before:-left-4",
          category.id == 0 && "before:bg-[#00D8C0]",
          category.id == 1 && "before:bg-[#FF8C90]",
          category.id == 2 && "before:bg-[#00A7DC]",
          category.id == 3 && "before:bg-[#A686F1]",
          category.id == 4 && "before:bg-[#C243FE]",
          category.id == 5 && "before:bg-[#FDC511]",
          category.id == 6 && "before:bg-[#ED80CA]",
          category.id == 7 && "before:bg-[#97C680]"
        )}
      >
        {category.title}
      </h3>
      <p className="text-sm font-normal text-[#999999]">
        {category.courses_number} Courses
      </p>
    </div>
  );
};

export const CategorySkeletonCard = ({ index }: { index: number }) => {
  return (
    <div className="bg-white rounded-[5px] p-4 space-y-4 hover:-translate-y-2 duration-300 ease-in-out">
      <h3
        className={cn(
          "font-medium leading-8 relative before:absolute before:h-full before:w-1 before:content-[''] before:bg-primary before:-left-4",
          index == 0 && "before:bg-[#00D8C0]",
          index == 1 && "before:bg-[#FF8C90]",
          index == 2 && "before:bg-[#00A7DC]",
          index == 3 && "before:bg-[#A686F1]",
          index == 4 && "before:bg-[#C243FE]",
          index == 5 && "before:bg-[#FDC511]",
          index == 6 && "before:bg-[#ED80CA]",
          index == 7 && "before:bg-[#97C680]"
        )}
      >
        <Skeleton className="w-[80%] h-6" />
      </h3>
      <div className="flex items-center gap-2">
        <Skeleton className="w-6 h-6" />
        <Skeleton className="flex-1 w-full h-6" />
      </div>
    </div>
  );
};
