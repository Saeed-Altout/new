import { Sidebar } from "./_components/sidebar";
import { Content } from "./_components/content";
import { ProtectedRoute } from "./_components/protected-route";
import { BreadcrumbResponsive } from "@/components/ui/breadcrumb-responsive";

const items = [
  {
    href: "#",
    label:
      "Vorbereitungskurs Elektroniker Gesellenprüfung Teil 1 (GP 1) PRAXIS",
  },
  { href: "#", label: "Basics of exam preparation" },
  { label: "Introduction to Trainee Coaching" },
];

export async function generateStaticParams() {
  // const types = ["online", "seminar", "webinar", "onsite"];
  // fetch data from api based on type
  // const ids = ["1", "2", "3"];

  const params = [];
  for (const type of types) {
    for (const id of ids) {
      params.push({ type, id });
    }
  }

  return params;
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ type: string; id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-full overflow-x-hidden">
      <ProtectedRoute>
        <div className="bg-[#F8F8F8] px-6 py-2">
          <BreadcrumbResponsive links={items} />
        </div>
        <div className="min-h-full flex items-start">
          <Sidebar id={id} />
          <Content />
        </div>
      </ProtectedRoute>
    </main>
  );
}
