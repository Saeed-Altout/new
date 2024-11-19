import { Role } from "@/config/enums";
import { redirect } from "@/i18n/routing";
import { VerificationOtpForm } from "@/components/auth/verification-otp-form";

export default async function VerificationOtpPage({
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
  return <VerificationOtpForm role={role} />;
}
