"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { OnlineCard, OnlineSkeltonCard } from "@/components/cards/online-card";
import { useGetMostRecommendedOnline } from "@/hooks/root/use-get-most-recommended-online";

export const RecommendedCourses = () => {
  const ctx = useTranslations("HomePage.most-recommended");
  const { data, isSuccess, isLoading } = useGetMostRecommendedOnline();

  console.log(data?.data);

  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading label={ctx("label")} title={ctx("title")} />
        <div className="pt-10 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(isLoading || !isSuccess) &&
              [...Array(3)].map((_, index) => (
                <OnlineSkeltonCard key={index} />
              ))}
            {isSuccess &&
              data?.data.map((online) => (
                <OnlineCard key={online.id} online={online} />
              ))}
          </div>
          <Button
            variant="ghost"
            className="w-fit mx-auto hover:bg-white"
            asChild
          >
            <Link href="/courses">
              {ctx("view-courses-button")}
              <ArrowRight className="text-[#FDC511] h-5 w-5 ml-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
