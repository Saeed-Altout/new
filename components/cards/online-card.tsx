"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useLocale } from "next-intl";
import { ArrowRight, Bookmark } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface OnlineCardProps {
  online: MostRecommendedOnline;
}

export const OnlineCard = ({ online }: OnlineCardProps) => {
  const locale = useLocale();

  return (
    <Card className="flex flex-col border-none shadow-none rounded-[12px] overflow-hidden group">
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
          src={online.media[0]}
          alt={online.title}
          width={1000}
          height={1000}
          priority
          className="object-cover w-full h-full"
        />
      </CardHeader>
      <CardContent className="flex-1 pt-6 flex flex-col justify-between items-start gap-4 px-0">
        <div className="w-full flex-1 flex flex-col gap-4 px-6">
          <h3 className="text-lg font-medium line-clamp-2 min-h-[60px]">
            {online.title}
          </h3>
          <div className="flex-1 flex justify-start items-start flex-wrap gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="bg-[#FDC511] text-white"
            >
              {online.type}
            </Button>
            {online.tags.map((category, index) => (
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
              {online.teacher_name}
            </span>
          </p>
          <div className="relative mr-10">
            <p className="text-lg font-medium">{online.price}</p>
            <span className="text-sm font-normal absolute top-0 left-[110%]">
              {online.currency}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pb-6 flex justify-between items-center">
        <Link
          href={"/courses/online/" + online.id}
          className="w-full font-medium text-base inline-flex items-center justify-between group"
        >
          {locale === "en" ? "More information" : "Weitere Informationen"}
          <ArrowRight className="h-5 w-5 text-[#FDC511] -translate-x-4 group-hover:translate-x-0 transition-all" />
          <span className="sr-only">Arrow right icon</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

export const OnlineSkeltonCard = () => {
  return (
    <Card className="flex flex-col rounded-[12px] overflow-hidden">
      <CardHeader className="relative h-[224px] w-full p-0">
        <Skeleton className="w-full h-full" />
      </CardHeader>
      <CardContent className="flex-1 pt-6 flex flex-col justify-between items-start gap-4 px-0">
        <div className="w-full flex-1 flex flex-col gap-4 px-6">
          <Skeleton className="w-full h-6" />
          <Skeleton className="w-2/3 h-6" />
          <div className="flex-1 flex justify-start items-start flex-wrap gap-2">
            <Skeleton className="w-20 h-10" />
            <Skeleton className="w-20 h-10" />
            <Skeleton className="w-20 h-10" />
          </div>
        </div>
        <div className="w-full border-y p-6 flex justify-between items-center gap-2">
          <Skeleton className="w-6 h-6" />
          <Skeleton className="w-full h-6" />
        </div>
      </CardContent>
      <CardFooter className="pb-6">
        <Skeleton className="w-full h-10" />
      </CardFooter>
    </Card>
  );
};
