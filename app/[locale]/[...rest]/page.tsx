import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export async function generateStaticParams() {
  const locales = routing.locales;
  return locales.map((locale) => ({
    locale,
    rest: [],
  }));
}

export default function CatchAllPage() {
  notFound();
}
