import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, CirclePlay } from "lucide-react";

export const Sidebar = () => {
  return (
    <section className="w-[384px] border-b-[20px] border-[#383838]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="bg-[#383838] text-white font-medium py-5 px-6">
            Basics of exam preparation
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-[#F3F3F3] flex items-start gap-2 py-4 px-6">
              <CirclePlay className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Introduction to Trainee Coaching
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  12m 9s
                </span>
              </div>
            </div>
            <div className="bg-transparent flex items-start gap-2 py-4 px-6">
              <BookOpen className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Why is good exam preparation im...
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  7m 19s
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="bg-transparent font-medium py-5 px-6">
            Zeitmanagement und Planung
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-[#F3F3F3] flex items-start gap-2 py-4 px-6">
              <CirclePlay className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Introduction to Trainee Coaching
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  12m 9s
                </span>
              </div>
            </div>
            <div className="bg-transparent flex items-start gap-2 py-4 px-6">
              <BookOpen className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Why is good exam preparation im...
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  7m 19s
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="bg-transparent font-medium py-5 px-6">
            Lernmethoden und Lernstrategien
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-[#F3F3F3] flex items-start gap-2 py-4 px-6">
              <CirclePlay className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Introduction to Trainee Coaching
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  12m 9s
                </span>
              </div>
            </div>
            <div className="bg-transparent flex items-start gap-2 py-4 px-6">
              <BookOpen className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Why is good exam preparation im...
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  7m 19s
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="bg-transparent font-medium py-5 px-6">
            Prüfungssimulation und -bewältigung
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-[#F3F3F3] flex items-start gap-2 py-4 px-6">
              <CirclePlay className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Introduction to Trainee Coaching
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  12m 9s
                </span>
              </div>
            </div>
            <div className="bg-transparent flex items-start gap-2 py-4 px-6">
              <BookOpen className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Why is good exam preparation im...
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  7m 19s
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="bg-transparent font-medium py-5 px-6">
            Umgang mit Prüfungsangst
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-[#F3F3F3] flex items-start gap-2 py-4 px-6">
              <CirclePlay className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Introduction to Trainee Coaching
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  12m 9s
                </span>
              </div>
            </div>
            <div className="bg-transparent flex items-start gap-2 py-4 px-6">
              <BookOpen className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Why is good exam preparation im...
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  7m 19s
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="bg-transparent font-medium py-5 px-6">
            Create a value propsition
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-[#F3F3F3] flex items-start gap-2 py-4 px-6">
              <CirclePlay className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Introduction to Trainee Coaching
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  12m 9s
                </span>
              </div>
            </div>
            <div className="bg-transparent flex items-start gap-2 py-4 px-6">
              <BookOpen className="h-5 w-5 mt-1" />
              <div className="space-y-2">
                <h3 className="text-[#383838] text-base font-medium">
                  Why is good exam preparation im...
                </h3>
                <span className="text-[#656565] text-sm font-normal">
                  7m 19s
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
