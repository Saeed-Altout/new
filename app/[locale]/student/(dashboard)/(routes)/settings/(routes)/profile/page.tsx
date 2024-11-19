import Image from "next/image";
import { ProfileForm } from "./_components/profile-form";
import { UserButton } from "@/components/auth/user-button";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[#222222] text-base font-normal">
            Profile picture
          </h3>
          <UserButton />
        </div>
        <div className="w-[148px] h-[148px] overflow-hidden rounded-[5px]">
          <Image
            src="/profile.png"
            alt="Image Profile"
            width={148}
            height={148}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
      <ProfileForm />
    </div>
  );
}
