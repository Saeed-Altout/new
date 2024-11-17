import { redirect } from "@/i18n/routing";
import { RegisterForm } from "@/components/auth/register-student-form";

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  if (!role) redirect("/");

  return <RegisterForm role={role} />;
}
