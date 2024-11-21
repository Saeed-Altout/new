import { Role } from "@/config/enums";
import { NewPasswordForm } from "@/components/auth/new-password-form";

export default async function NewPasswordPage() {
  return <NewPasswordForm role={Role.COMPANY} />;
}
