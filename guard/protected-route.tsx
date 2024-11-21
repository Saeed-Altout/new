"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth-store";
import { getUserRole, isCompanyUser, isStudentUser } from "@/utils/protected";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const role = getUserRole();

    if (!isAuthenticated) {
      router.push(`/${role}/auth/login`);
    }

    if (isCompanyUser()) {
      router.replace("/company/settings/profile");
    } else if (isStudentUser()) {
      router.push("/student/settings/profile");
    } else {
      router.push("/student/settings/profile");
    }

    return () => setIsMounted(false);
  }, [isAuthenticated, router]);

  if (!isMounted || !isAuthenticated) return null;

  return <>{children}</>;
};
