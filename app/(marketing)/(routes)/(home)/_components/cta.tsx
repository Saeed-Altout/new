import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center max-w-[636px] leading-10 md:leading-[55px] lg:leading-[61.6px]">
          Qualify your team within the in-Akademie{" "}
          <span className="text-[#FDC511]">Business</span>
        </h2>
        <p className="text-lg font-normal leading-7 text-[#656565] text-center max-w-[845px]">
          Elevate your team&apos;s expertise through in-Akademie Business
          qualification, unlocking new levels of success and professional
          growth.
        </p>
        <Button className="w-full sm:w-fit px-10 bg-[#FDC511] hover:bg-[#FDC511]/90 drop-shadow">
          Einstieg in die Akademie Business
        </Button>
      </div>
    </section>
  );
};
