import { redirect } from "next/navigation";

import { Role } from "@/config";
import { LoginForm } from "@/components/auth/login-form";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  if (role !== Role.BUSINESS) redirect("/auth/login");
  return <LoginForm role={role} />;
}
