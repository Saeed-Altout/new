import { Sidebar } from "./_components/sidebar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full grid grid-cols-1 md:grid-cols-2">
      <Sidebar />
      <div className="flex justify-center items-center">{children}</div>
    </main>
  );
}
