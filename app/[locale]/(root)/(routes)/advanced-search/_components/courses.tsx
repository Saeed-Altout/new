import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { CourseCard } from "@/components/cards/course-card";

import { searchCoursesDe, searchCoursesEn } from "@/constants";

export const Courses = () => {
  const locale = useLocale();
  const ctx = useTranslations("AdvancedSearchPage.result");

  return (
    <section id="filter-form" className="bg-[#F8F8F8] py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading title={ctx("title")} label={ctx("label")} />
        <div className="pt-10 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locale === "en"
              ? searchCoursesEn.map((course, index) => (
                  <CourseCard initialData={course} key={index} />
                ))
              : searchCoursesDe.map((course, index) => (
                  <CourseCard initialData={course} key={index} />
                ))}
          </div>
          <Button
            variant="ghost"
            className="w-fit mx-auto hover:bg-white"
            asChild
          >
            <Link href="/courses">
              {ctx("view-button")}
              <ArrowRight className="text-[#FDC511] h-5 w-5 ml-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
