import Image from "next/image";
import { useTranslations } from "next-intl";

import { Heading } from "@/components/ui/heading";

export const ExperiencedInstructor = () => {
  const ctx = useTranslations("HomePage.our-experienced-instructor");

  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading label={ctx("label")} title={ctx("title")} />
        <div className="mt-10 flex justify-between items-start flex-col lg:flex-row gap-10">
          <div className="w-full sm:w-[405.6px] h-full sm:h-[375.8px] rounded-[12px] overflow-hidden">
            <Image
              src="/instructor.png"
              alt="Experienced Instructor Image"
              width={1000}
              height={1000}
              priority
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-medium">{ctx("name")}</h3>
              <p className="text-[#F3BA02] font-normal">{ctx("job_title")}</p>
            </div>
            {ctx("about")
              .split("$$")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="font-normal text-sm md:text-base lg:text-lg leading-6 md:leading-8 lg:leading-[28.8px] text-[#656565]"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
