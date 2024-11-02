import Image from "next/image";
import { Heading } from "@/components/ui/heading";

export const ExperiencedInstructor = () => {
  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading label="Discover" title="Our experienced instructor" />
        <div className="mt-10 flex justify-between items-start flex-col lg:flex-row gap-10">
          <div className="w-full sm:w-[405.6px] h-full sm:h-[375.8px] rounded-[12px] overflow-hidden">
            <Image
              src="/course-01.png"
              alt="Experienced Instructor Image"
              width={1000}
              height={1000}
              priority
              className="object-cover h-full w-full"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Joans Edwards</h3>
              <p className="text-[#F3BA02] font-normal">
                Engineering Master&apos;s degree in Electrical Engineering.
              </p>
            </div>
            <p className="font-normal text-sm md:text-base lg:text-lg leading-6 md:leading-8 lg:leading-[28.8px] text-[#656565]">
              Whether you are new to the field or an experienced professional,
              attending your courses with me will give you the knowledge and
              skills you need to improve your business. I can&apos;t wait to
              help you achieve your goals!
            </p>
            <p className="font-normal text-sm md:text-base lg:text-lg leading-6 md:leading-8 lg:leading-[28.8px] text-[#656565]">
              Hello everyone! I am pleased to inform you that I will lead the
              courses on our website. With my extensive experience in the field
              of electrical engineering, I am confident that I can provide you
              with the knowledge and skills you need for your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
