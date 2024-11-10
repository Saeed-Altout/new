import Image from "next/image";
import { ProfileForm } from "./_components/profile-form";

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-[#222222] text-base font-normal">
          Profile picture
        </h3>
        <div className="w-[148px] h-[148px] overflow-hidden rounded-[5px]">
          <Image
            src="/image-profile.png"
            alt="Image Profile"
            width={148}
            height={148}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <ProfileForm />
    </div>
  );
}
