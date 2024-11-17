"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";

export const UnprotectedRoute = ({
  children,
  redirectTo = "/",
}: {
  children: React.ReactNode;
  redirectTo?: string;
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    setIsMounted(true);
    if (isAuthenticated) {
      router.push(redirectTo);
    }

    return () => setIsMounted(false);
  }, [isAuthenticated, router, redirectTo]);

  if (!isMounted || isAuthenticated) return null;

  return <>{children}</>;
};
