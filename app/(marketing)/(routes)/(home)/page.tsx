import { Categories } from "./_components/categories";
import { Courses } from "./_components/courses";
import { Hero } from "./_components/hero";

export default function MarketingPage() {
  return (
    <main>
      <Hero />
      <Courses />
      <Categories />
    </main>
  );
}
