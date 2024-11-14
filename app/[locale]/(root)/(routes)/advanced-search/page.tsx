import { Courses } from "./_components/courses";
import { FilterForm } from "./_components/filter-form";

export default function AdvancedSearchPage() {
  return (
    <main className="min-h-full overflow-x-hidden">
      <FilterForm />
      <Courses />
    </main>
  );
}
