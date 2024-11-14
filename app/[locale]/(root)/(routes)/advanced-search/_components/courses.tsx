import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { CourseCard } from "@/components/cards/course-card";

import { searchCourses } from "@/constants";

export const Courses = () => {
  return (
    <section id="filter-form" className="bg-[#F8F8F8] py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading title="Search Results" label="Courses" />
        <div className="pt-10 flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {searchCourses.map((course, index) => (
              <CourseCard initialData={course} key={index} />
            ))}
          </div>
          <Button
            variant="ghost"
            className="w-fit mx-auto hover:bg-white"
            asChild
          >
            <Link href="/courses">
              View all courses
              <ArrowRight className="text-[#FDC511] h-5 w-5 ml-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
