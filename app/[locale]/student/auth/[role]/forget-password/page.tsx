import { Role } from "@/config/enums";
import { redirect } from "@/i18n/routing";
import { ForgetPasswordForm } from "@/components/auth/forget-password-form";

export default async function ForgetPasswordPage({
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

  return <ForgetPasswordForm role={role} />;
}
