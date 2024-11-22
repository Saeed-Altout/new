"use client";

import { OverView } from "./overview";
import { Comments } from "./comments";
import { Notebook } from "./notebook";
import { Reviews } from "./reviews";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCourseStore } from "@/stores/course-store";
export const Content = () => {
  const { lesson } = useCourseStore();

  return (
    <div className="flex-1 px-6 py-4 space-y-6">
      <iframe
        className="h-[408px] w-full"
        src="https://www.youtube.com/embed/_uQrJ0TkZlc"
        title={lesson.title}
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
  );
};
