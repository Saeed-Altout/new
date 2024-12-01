import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { logout } from "@/api";
import { useAuthStore } from "@/store";
import { clearAll } from "@/utils/local-storage";

export const useLogout = () => {
  const { toast } = useToast();
  const { clearAuth } = useAuthStore();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess: (data) => {
      clearAuth();
      clearAll();
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
