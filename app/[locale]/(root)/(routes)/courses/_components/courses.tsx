import { Heading } from "@/components/ui/heading";
import { CourseCard } from "@/components/cards/course-card";

import { allCoursesDe, allCoursesEn } from "@/constants";
import { useLocale, useTranslations } from "next-intl";

export const Courses = () => {
  const locale = useLocale();
  const ctx = useTranslations("CoursesPage");
  return (
    <section id="our-popular-seminars" className="bg-[#F8F8F8] py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading title={ctx("title")} label={ctx("label")} />
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locale === "en"
            ? allCoursesEn.map((course, index) => (
                <CourseCard initialData={course} key={index} />
              ))
            : allCoursesDe.map((course, index) => (
                <CourseCard initialData={course} key={index} />
              ))}
        </div>
      </div>
    </section>
  );
};
