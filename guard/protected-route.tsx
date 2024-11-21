"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth-store";
import { getUserRole, isCompanyUser, isStudentUser } from "@/utils/protected";
import { BeatLoader } from "react-spinners";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);

    if (!isAuthenticated) {
      const role = getUserRole();
      const loginPath = role ? `/${role}/auth/login` : "/student/auth/login";
      router.replace(loginPath);
    } else {
      if (isCompanyUser()) {
        router.replace("/company/settings/profile");
      } else if (isStudentUser()) {
        router.replace("/student/settings/profile");
      } else {
        router.replace("/student/auth/login");
      }
    }

    return () => setIsMounted(false);
  }, [isAuthenticated, router]);

  if (!isMounted)
    return (
      <div className="h-full flex justify-center items-center">
        <BeatLoader size={30} />
      </div>
    );

  return isAuthenticated ? <>{children}</> : null;
};
