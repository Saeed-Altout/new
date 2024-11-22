"use client";

import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

import { useAuthStore } from "@/stores/auth-store";
import { useRouter, usePathname } from "@/i18n/routing";
import { getUserRole } from "@/utils/protected";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);

    if (!isAuthenticated) {
      const role = getUserRole();
      const loginPath = role ? `/${role}/auth/login` : "/student/auth/login";
      router.replace(loginPath);
    }

    return () => setIsMounted(false);
  }, [isAuthenticated, router, pathname]);

  if (!isMounted)
    return (
      <div className="h-full flex justify-center items-center">
        <BeatLoader size={30} />
      </div>
    );

  return isAuthenticated ? <>{children}</> : null;
};
