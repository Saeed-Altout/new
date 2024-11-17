import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { ProtectedRoute } from "@/guard/protected-route";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <Navbar />
      {children}
      <Footer />
    </ProtectedRoute>
  );
}
