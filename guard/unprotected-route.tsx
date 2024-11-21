"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth-store";
import { isCompanyUser, isStudentUser } from "@/utils/protected";

export const UnprotectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    setIsMounted(true);

    if (isAuthenticated) {
      if (isCompanyUser()) {
        router.push("/company/settings/profile");
      } else if (isStudentUser()) {
        router.push("/student/settings/profile");
      } else {
        router.push("/student/settings/profile");
      }
    }

    return () => setIsMounted(false);
  }, [isAuthenticated, router]);

  if (!isMounted || isAuthenticated) return null;

  return <>{children}</>;
};
