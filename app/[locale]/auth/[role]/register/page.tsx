import { Role } from "@/config/enums";
import { redirect } from "@/i18n/routing";
import { RegisterForm } from "@/components/auth/register-form";

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ role: Role }>;
}) {
  const { role } = await params;

  if (!Object.values(Role).includes(role as Role)) {
    redirect({
      href: `/auth/${Role.STUDENT}/register`,
      locale: "en",
    });
  }

  return <RegisterForm role={role} />;
}
