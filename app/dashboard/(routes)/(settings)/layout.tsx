import { Sidebar } from "./_components/sidebar";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[calc(100vh-86px)] flex flex-row">
      <Sidebar />
      <div className="min-h-full flex-1 overflow-y-auto px-16 py-10 [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:bg-[#FDC511]">
        {children}
      </div>
    </div>
  );
}
