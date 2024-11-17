import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "@/i18n/routing";

import { useToast } from "@/hooks/use-toast";
import { login } from "@/api/auth/login";
import { useAuthStore } from "@/stores/auth-store";

export const useLogin = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { setToken } = useAuthStore();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginBody) => login(data),
    onSuccess: (data) => {
      toast({
        title: "Login",
        description: data.message ?? "Login successfully",
      });
      setToken(data.data.token);
      router.push("/");
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
