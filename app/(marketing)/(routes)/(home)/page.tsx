import { Hero } from "./_components/hero";
import { Courses } from "./_components/courses";
import { Categories } from "./_components/categories";
import { ExperiencedInstructor } from "./_components/experienced-instructor";

export default function MarketingPage() {
  return (
    <main>
      <Hero />
      <Courses />
      <Categories />
      <ExperiencedInstructor />
    </main>
  );
}
