import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { seminarsEn, seminarsDe } from "@/constants";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { CourseCard } from "@/components/cards/course-card";

export const OurPopularSeminars = () => {
  const locale = useLocale();
  const ctx = useTranslations("HomePage.our-popular-seminars");

  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading label={ctx("label")} title={ctx("title")} />
        <div className="pt-10 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locale === "en"
              ? seminarsEn.map((seminar, index) => (
                  <CourseCard initialData={seminar} key={index} />
                ))
              : seminarsDe.map((seminar, index) => (
                  <CourseCard initialData={seminar} key={index} />
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
