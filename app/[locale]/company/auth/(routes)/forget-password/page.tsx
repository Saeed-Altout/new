import { Role } from "@/config/enums";
import { ForgetPasswordForm } from "@/components/auth/forget-password-form";

export default async function ForgetPasswordPage() {
  return <ForgetPasswordForm role={Role.COMPANY} />;
}
