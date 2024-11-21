"use client";

import { useTranslations } from "next-intl";
import { useSearchStore } from "@/stores/search-store";

import { Heading } from "@/components/ui/heading";
import { SearchCourseCard } from "@/components/cards/search-course-card";

export const Courses = () => {
  const ctx = useTranslations("AdvancedSearchPage.result");
  const { courses } = useSearchStore();

  return (
    <section id="result-filter-form" className="bg-[#F8F8F8] py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading title={ctx("title")} label={ctx("label")} />
        {courses.length > 0 ? (
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <SearchCourseCard course={course} key={index} />
            ))}
          </div>
        ) : (
          <div className="pt-10 h-[500px] flex justify-center items-center">
            <p>No Results Found</p>
          </div>
        )}
      </div>
    </section>
  );
};
