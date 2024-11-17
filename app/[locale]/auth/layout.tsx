import { Sidebar } from "./_components/sidebar";

export default function AuthStudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full grid grid-cols-1 lg:grid-cols-2">
      <Sidebar />
      <div className="flex justify-center items-center transition-all">
        {children}
      </div>
    </main>
  );
}
