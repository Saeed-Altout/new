import { Hero } from "./_components/hero";
import { Courses } from "./_components/courses";
import { Categories } from "./_components/categories";
import { ExperiencedInstructor } from "./_components/experienced-instructor";
import { Seminars } from "./_components/seminars";
import { CTA } from "./_components/cta";

export default function MarketingPage() {
  return (
    <main>
      <Hero />
      <Courses />
      <Categories />
      <ExperiencedInstructor />
      <Seminars />
      <CTA />
    </main>
  );
}
