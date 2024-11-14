import { redirect } from "next/navigation";

import { Role } from "@/config";
import { RegisterForm } from "@/components/auth/register-form";

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  if (role !== Role.BUSINESS) redirect("/auth/login");
  return <RegisterForm role={role} />;
}
