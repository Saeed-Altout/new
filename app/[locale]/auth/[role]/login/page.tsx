import { Role } from "@/config/enums";
import { redirect } from "@/i18n/routing";
import { LoginForm } from "@/components/auth/login-form";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ role: Role }>;
}) {
  const { role } = await params;

  if (!Object.values(Role).includes(role as Role)) {
    redirect({
      href: `/auth/${Role.STUDENT}/login`,
      locale: "en",
    });
  }
  return <LoginForm role={role} />;
}
