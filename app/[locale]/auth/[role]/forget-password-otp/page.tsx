import { Role } from "@/config/enums";
import { redirect } from "@/i18n/routing";
import { ForgetPasswordOtpForm } from "@/components/auth/forget-password-otp-form";

export default async function ForgetPasswordOtpPage({
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
  return <ForgetPasswordOtpForm role={role} />;
}
