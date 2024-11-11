import Link from "next/link";
import Image from "next/image";

import { ArrowRight, Bookmark } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Course {
  id: number;
  title: string;
  categories: {
    id: number;
    label: string;
  }[];
  cover: string;
  price: string;
  currency: string;
  href: string;
  owner: string;
}

interface CourseCard {
  initialData: Course;
}

export const CourseCard = ({ initialData }: CourseCard) => {
  const { title, categories, cover, price, currency, owner } = initialData;
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
          src={cover}
          alt={title}
          width={1000}
          height={1000}
          priority
          className="object-cover w-full h-full"
        />
      </CardHeader>
      <CardContent className="flex-1 pt-6 flex flex-col justify-between items-start gap-4 px-0">
        <div className="w-full flex-1 flex flex-col gap-4 px-6">
          <h3 className="text-lg font-medium line-clamp-2 flex-1">{title}</h3>
          <div className="flex justify-start items-center flex-wrap gap-2">
            {categories.map((category, index) => (
              <Button key={index} variant="outline" size="sm">
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="w-full border-y p-6 flex justify-between items-center">
          <p className="text-sm font-normal">
            By
            <span className="text-base font-medium ml-1">{owner}</span>
          </p>
          <div className="relative mr-10">
            <p className="text-lg font-medium">{price}</p>
            <span className="text-sm font-normal absolute top-0 left-[110%]">
              {currency}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pb-6 flex justify-between items-center">
        <Link
          href={
            "/learn/medical-neuroscience/supplement/diN0Q/learning-objectives"
          }
          className="w-full font-medium text-base inline-flex items-center justify-between group"
        >
          More information
          <ArrowRight className="h-5 w-5 text-[#FDC511] -translate-x-4 group-hover:translate-x-0 transition-all" />
          <span className="sr-only">Arrow right icon</span>
        </Link>
      </CardFooter>
    </Card>
  );
};
