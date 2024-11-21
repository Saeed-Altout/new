import { Role } from "@/config/enums";
import { VerificationOtpForm } from "@/components/auth/verification-otp-form";

export default async function VerificationOtpPage() {
  return <VerificationOtpForm role={Role.COMPANY} />;
}
