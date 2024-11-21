import { ProtectedRoute } from "@/guard/protected-route";
import { Navbar } from "./_components/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute redirectTo="/company/auth/login">
      <Navbar />
      {children}
    </ProtectedRoute>
  );
}
