import { Role } from "@/config/enums";
import { ForgetPasswordOtpForm } from "@/components/auth/forget-password-otp-form";

export default async function ForgetPasswordOtpPage() {
  return <ForgetPasswordOtpForm role={Role.COMPANY} />;
}
