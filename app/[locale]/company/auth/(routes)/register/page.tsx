import { Role } from "@/config/enums";
import { RegisterForm } from "@/components/auth/register-form";

export default async function RegisterPage() {
  return <RegisterForm role={Role.COMPANY} />;
}
