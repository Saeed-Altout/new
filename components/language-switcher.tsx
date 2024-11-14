import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
// import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();

  const otherLocale = locale === "en" ? "de" : "en";

  return (
    <Button asChild>
      <Link href={pathname} locale={otherLocale}>
        {locale === "en" ? "Deutsch" : "English"}
      </Link>
    </Button>
  );
};
