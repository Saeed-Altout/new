import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export const CTA = () => {
  const ctx = useTranslations("HomePage.cta");
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col justify-center items-center gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center max-w-[700px] leading-10 md:leading-[55px] lg:leading-[61.6px]">
          {ctx("title")}{" "}
          <span className="text-[#FDC511]">{ctx("special-title")}</span>
        </h2>
        <p className="text-lg font-normal leading-7 text-[#656565] text-center max-w-[845px]">
          {ctx("description")}
        </p>
        <Button
          className="w-full sm:w-fit px-10 bg-[#FDC511] hover:bg-[#FDC511]/90 drop-shadow"
          asChild
        >
          <Link href="/company/auth/login">{ctx("start-button")}</Link>
        </Button>
      </div>
    </section>
  );
};
