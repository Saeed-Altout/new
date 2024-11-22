"use client";

import { BookOpen, CirclePlay } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetCourse } from "@/hooks/dashboard/use-get-course";
import { useCourseStore } from "@/stores/course-store";

export const Sidebar = ({ id }: { id: string }) => {
  const { data: course, isLoading, isSuccess } = useGetCourse({ id });
  const { setLesson } = useCourseStore();

  return (
    <section className="w-[384px] border-b-[20px] border-[#383838]">
      {(isLoading || !isSuccess) && (
        <Accordion type="single" collapsible>
          {[...Array(10)].map((_, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="bg-[#383838] text-white font-medium py-5 px-6">
                <Skeleton className="w-[80%] h-5" />
              </AccordionTrigger>
              <AccordionContent>
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-[#F3F3F3] flex items-start gap-2 py-4 px-6"
                  >
                    <Skeleton className="h-6 w-6" />
                    <div className="space-y-2">
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-5 w-2/3" />
                    </div>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {isSuccess && (
        <Accordion type="single" collapsible>
          {course?.data.sections.map((section, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="bg-[#383838] text-white font-medium py-5 px-6">
                {section.section_title}
              </AccordionTrigger>
              <AccordionContent className="bg-[#F3F3F3]">
                {section.lessons.length > 0 ? (
                  <>
                    {section.lessons.map((lesson, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2 py-4 px-6 bg-transparent hover:bg-[#e4e4e4] cursor-pointer duration-300 ease-in-out"
                        onClick={() => setLesson(lesson)}
                      >
                        {lesson.type === "reading" && (
                          <BookOpen className="h-5 w-5 mt-1" />
                        )}
                        {lesson.type === "video" && (
                          <CirclePlay className="h-5 w-5 mt-1" />
                        )}
                        <div className="space-y-2">
                          <h3 className="text-[#383838] text-base font-medium">
                            {lesson.title}
                          </h3>
                          <span className="text-[#656565] text-sm font-normal">
                            {lesson.estimate_time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <p className="py-2 text-center">No Lessons yet</p>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </section>
  );
};
