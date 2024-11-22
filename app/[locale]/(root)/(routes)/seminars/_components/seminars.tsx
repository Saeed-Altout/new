"use client";
import { Heading } from "@/components/ui/heading";
import { CourseCard, CourseSkeltonCard } from "@/components/cards/course-card";

import { useTranslations } from "next-intl";
import { useGetAllCourses } from "@/hooks/root/use-get-all-courses";

export const Seminars = () => {
  const ctx = useTranslations("SeminarsPage");
  const { data: courses, isSuccess, isLoading } = useGetAllCourses();

  return (
    <section id="our-popular-seminars" className="bg-[#F8F8F8] py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading title={ctx("title")} label={ctx("label")} />
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(isLoading || !isSuccess) &&
            [...Array(6)].map((_, index) => <CourseSkeltonCard key={index} />)}
          {isSuccess &&
            courses?.data.data
              .filter((course) => course.type === "seminar")
              .map((course, index) => (
                <CourseCard key={index} course={course} />
              ))}
        </div>
      </div>
    </section>
  );
};
