"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bookmark } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";

import { useGetMostRecommendedSeminar } from "@/hooks/use-get-most-recommended-seminar";

export const OurPopularSeminars = () => {
  const locale = useLocale();
  const ctx = useTranslations("HomePage.our-popular-seminars");
  const { data, isSuccess } = useGetMostRecommendedSeminar();

  if (!isSuccess) return null;

  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading label={ctx("label")} title={ctx("title")} />
        <div className="pt-10 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.data.map((seminar, index) => (
              <Card
                key={index}
                className="flex flex-col border-none shadow-none rounded-[12px] overflow-hidden group"
              >
                <CardHeader className="relative h-[224px] w-full p-0 space-y-0">
                  <div className="absolute z-0 left-0 bottom-0 w-full h-full bg-gradient-to-t from-black/60 group-hover:from-black/90 to-black/0 transition-all" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute z-10 right-4 bottom-4 hidden group-hover:inline-flex hover:bg-background/5 group/icon"
                  >
                    <Bookmark className="h-5 w-5 text-white group-hover/icon:text-[#FDC511]" />
                  </Button>
                  <Image
                    src={seminar.media[0]}
                    alt={seminar.title}
                    width={1000}
                    height={1000}
                    priority
                    className="object-cover w-full h-full"
                  />
                </CardHeader>
                <CardContent className="flex-1 pt-6 flex flex-col justify-between items-start gap-4 px-0">
                  <div className="w-full flex-1 flex flex-col gap-4 px-6">
                    <h3 className="text-lg font-medium line-clamp-2 min-h-[60px]">
                      {seminar.title}
                    </h3>
                    <div className="flex-1 flex justify-start items-start flex-wrap gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="bg-[#FDC511] text-white"
                      >
                        {seminar.type}
                      </Button>
                      {seminar.tags.map((category, index) => (
                        <Button key={index} variant="outline" size="sm">
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="w-full border-y p-6 flex justify-between items-center">
                    <p className="text-sm font-normal">
                      By
                      <span className="text-base font-medium ml-1">
                        {seminar.teacher_name}
                      </span>
                    </p>
                    <div className="relative mr-10">
                      <p className="text-lg font-medium">{seminar.price}</p>
                      <span className="text-sm font-normal absolute top-0 left-[110%]">
                        {seminar.currency}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pb-6 flex justify-between items-center">
                  <Link
                    href={"/courses/seminar/" + seminar.id}
                    className="w-full font-medium text-base inline-flex items-center justify-between group"
                  >
                    {locale === "en"
                      ? "More information"
                      : "Weitere Informationen"}
                    <ArrowRight className="h-5 w-5 text-[#FDC511] -translate-x-4 group-hover:translate-x-0 transition-all" />
                    <span className="sr-only">Arrow right icon</span>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button variant="ghost" className="w-fit mx-auto hover:bg-white">
            {ctx("view-courses-button")}
            <ArrowRight className="text-[#FDC511] h-5 w-5 ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};
