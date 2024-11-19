import { UserButton } from "@/components/auth/user-button";
import { ProfileForm } from "./_components/profile-form";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <ProfileForm />
      <UserButton />
    </div>
  );
}
