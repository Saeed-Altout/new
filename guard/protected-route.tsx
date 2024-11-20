"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/routing";
import { useAuthStore } from "@/stores/auth-store";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    setIsMounted(true);
    if (!isAuthenticated) {
      router.push("/student/auth/login");
    }

    return () => setIsMounted(false);
  }, [isAuthenticated, router]);

  if (!isMounted || !isAuthenticated) return null;

  return <>{children}</>;
};
