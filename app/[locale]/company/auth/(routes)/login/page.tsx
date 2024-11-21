import { Role } from "@/config/enums";
import { LoginForm } from "@/components/auth/login-form";

export default async function LoginPage() {
  return <LoginForm role={Role.COMPANY} />;
}
