import { Role } from "@/config/enums";
import { redirect } from "@/i18n/routing";
import { NewPasswordForm } from "@/components/auth/new-password-form";

export default async function NewPasswordPage({
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
  return <NewPasswordForm role={role} />;
}
