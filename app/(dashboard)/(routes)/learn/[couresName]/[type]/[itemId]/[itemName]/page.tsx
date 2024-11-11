import { BreadcrumbResponsive } from "@/components/ui/breadcrumb-responsive";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, CirclePlay } from "lucide-react";
import { OverView } from "./_components/overview";
import { Comments } from "./_components/comments";
import { Notebook } from "./_components/notebook";
import { Reviews } from "./_components/reviews";
const items = [
  {
    href: "#",
    label:
      "Vorbereitungskurs Elektroniker Gesellenprüfung Teil 1 (GP 1) PRAXIS",
  },
  { href: "#", label: "Basics of exam preparation" },
  { label: "Introduction to Trainee Coaching" },
];

export default function ItemPage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <div className="bg-[#F8F8F8] px-6 py-2">
        <BreadcrumbResponsive links={items} />
      </div>
      <div className="min-h-full flex items-start">
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
        <div className="flex-1 px-6 py-4 space-y-6">
          <iframe
            className="h-[408px] w-full"
            src="https://www.youtube.com/embed/_uQrJ0TkZlc"
            title="Python Tutorial - Python Full Course for Beginners"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <Tabs defaultValue="overview" className="space-y-6 pb-14">
            <TabsList className="flex items-center justify-start gap-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="notebook">Notebook</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <OverView />
            </TabsContent>
            <TabsContent value="comments">
              <Comments />
            </TabsContent>
            <TabsContent value="notebook">
              <Notebook />
            </TabsContent>
            <TabsContent value="reviews">
              <Reviews />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
