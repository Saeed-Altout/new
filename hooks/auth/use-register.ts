import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "@/i18n/routing";

import { useToast } from "@/hooks/use-toast";
import { register } from "@/api/auth/register";
import { EMAIL } from "@/config/constants";

export const useRegister = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterBody) => register(data),
    onSuccess: (data, variables) => {
      toast({
        title: "Register",
        description: data.message ?? "Register successfully",
      });
      localStorage.setItem(EMAIL, variables.email);
      localStorage.removeItem("currentUser");
      router.push(`/${variables.role}/auth/verification-otp`);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Register",
          description: message ?? "Register failed",
        });
      }
    },
  });
};
