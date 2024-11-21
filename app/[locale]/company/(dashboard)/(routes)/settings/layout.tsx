import { Sidebar } from "./_components/sidebar";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex">
      <Sidebar />
      <div className="flex-1 py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        {children}
      </div>
    </div>
  );
}
