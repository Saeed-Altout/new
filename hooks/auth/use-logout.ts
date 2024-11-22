import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/stores/auth-store";
import { logout } from "@/api/auth/logout";

export const useLogout = () => {
  const { toast } = useToast();
  const { clearAuth } = useAuthStore();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess: (data) => {
      clearAuth();
      localStorage.clear();
      toast({
        title: "Logout",
        description: data.message ?? "Logout successfully",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Logout",
          description: message ?? "Logout failed",
        });
      }
    },
  });
};
