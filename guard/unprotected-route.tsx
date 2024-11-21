"use client";

import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

import { useRouter } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth-store";
import { isCompanyUser, isStudentUser } from "@/utils/protected";

export const UnprotectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);

    if (isAuthenticated) {
      const roleRedirectPath = getRedirectPath();
      if (roleRedirectPath) {
        router.replace(roleRedirectPath);
      }
    }

    return () => setIsMounted(false);
  }, [isAuthenticated, router]);

  const getRedirectPath = () => {
    if (isCompanyUser()) return "/company/settings/profile";
    if (isStudentUser()) return "/student/settings/profile";
    return null;
  };

  if (!isMounted)
    return (
      <div className="h-full flex justify-center items-center">
        <BeatLoader size={30} />
      </div>
    );

  return isAuthenticated ? null : <>{children}</>;
};
