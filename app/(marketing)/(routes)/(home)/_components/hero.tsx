import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="pt-14 md:pt-20 lg:pt-[109px]">
      <div className="flex justify-between items-start gap-[100px] max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="py-10 flex flex-col gap-8 max-w-[764px]">
          <h1 className="font-bold text-5xl leading-[54px] lg:text-[54px] lg:leading-[69.12px]">
            Train for your dream job
          </h1>
          <div className="space-y-2 lg:space-y-4">
            <p className="font-normal text-sm md:text-base lg:text-lg leading-6 md:leading-8 lg:leading-[28.8px] text-[#656565]">
              At our institution, students have the opportunity to refine their
              professional skills with the guidance of our expert teacher in an
              engaging manner.
            </p>
            <p className="font-normal text-sm md:text-base lg:text-lg leading-6 md:leading-8 lg:leading-[28.8px] text-[#656565]">
              We have a talented trainer who is dedicated to instructing over
              200 students.
            </p>
          </div>
          <Button className="w-full sm:w-fit px-10">
            Start your learning journey
          </Button>
        </div>
        <div className="w-[400px] h-full max-h-[509.7px] hidden lg:block">
          <Image
            src="/hero.svg"
            alt="Hero Image"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </section>
  );
};
