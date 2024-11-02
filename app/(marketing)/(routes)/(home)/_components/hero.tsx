import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="flex justify-between items-start gap-[100px] pt-[109px]">
      <div className="py-10 flex flex-col gap-8 max-w-[764px]">
        <h1 className="font-bold text-[54px] leading-[69.12px]">
          Train for your dream job
        </h1>
        <div className="space-y-4">
          <p className="font-light text-lg leading-[28.8px] text-[#656565]">
            At our institution, students have the opportunity to refine their
            professional skills with the guidance of our expert teacher in an
            engaging manner.
          </p>
          <p className="font-light text-lg leading-[28.8px] text-[#656565]">
            We have a talented trainer who is dedicated to instructing over 200
            students.
          </p>
        </div>
        <Button className="w-fit px-10">Start your learning journey</Button>
      </div>
      <div className="w-[400px] h-[509.7px]">
        <Image
          src="/hero.svg"
          alt="Hero Image"
          width={1000}
          height={1000}
          priority
        />
      </div>
    </section>
  );
};
