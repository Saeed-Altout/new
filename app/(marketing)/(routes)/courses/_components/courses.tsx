import { Heading } from "@/components/ui/heading";
import { CourseCard } from "@/components/cards/course-card";

import { searchCourses } from "@/constants";

export const Courses = () => {
  return (
    <section id="our-popular-seminars" className="bg-[#F8F8F8] py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading title="Our popular seminars" label="Overview" />
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchCourses.map((course, index) => (
            <CourseCard initialData={course} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
