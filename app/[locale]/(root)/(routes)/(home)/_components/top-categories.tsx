"use client";

import { useTranslations } from "next-intl";

import {
  CategoryCard,
  CategorySkeletonCard,
} from "@/components/cards/category-card";
import { Heading } from "@/components/ui/heading";

import { useGetCategories } from "@/hooks/root/use-get-categories";

export const TopCategories = () => {
  const ctx = useTranslations("HomePage.top-categories");
  const { data, isSuccess, isLoading } = useGetCategories();

  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading label={ctx("label")} title={ctx("title")} />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(isLoading || !isSuccess) &&
            [...Array(8)].map((_, index) => (
              <CategorySkeletonCard key={index} index={index} />
            ))}
          {isSuccess &&
            data.data.map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
        </div>
      </div>
    </section>
  );
};
