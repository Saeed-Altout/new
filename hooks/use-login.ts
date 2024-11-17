import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { login } from "@/api/auth/login";
import { useAuthStore } from "@/stores/auth-store";

export const useLogin = () => {
  const { toast } = useToast();
  const { setAuthData } = useAuthStore();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginBody) => login(data),
    onSuccess: (data) => {
      toast({
        title: "Login",
        description: data.message ?? "Login successfully",
      });
      setAuthData(data.data);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Login",
          description: message ?? "Login failed",
        });
      }
    },
  });
};
