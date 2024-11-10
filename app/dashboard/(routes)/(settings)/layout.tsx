import { Sidebar } from "./_components/sidebar";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full flex flex-row">
      <Sidebar />
      <main className="flex-1 p-16">{children}</main>
    </div>
  );
}
