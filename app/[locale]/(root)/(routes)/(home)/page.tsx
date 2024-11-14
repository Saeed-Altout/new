import { CTA } from "./_components/cta";
import { Hero } from "./_components/hero";
import { RecommendedCourses } from "./_components/recommended-courses";
import { Seminars } from "./_components/seminars";
import { Categories } from "./_components/categories";
import { ExperiencedInstructor } from "./_components/experienced-instructor";

export default async function HomePage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <Hero />
      <RecommendedCourses />
      <Categories />
      <ExperiencedInstructor />
      <Seminars />
      <CTA />
    </main>
  );
}
