"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth-store";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    setIsMounted(true);
    if (!isAuthenticated) {
      router.push("/auth/student/login");
    }

    return () => setIsMounted(false);
  }, [isAuthenticated, router]);

  if (!isMounted || !isAuthenticated) return null;

  return <>{children}</>;
};
