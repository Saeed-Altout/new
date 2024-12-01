import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "@/i18n/routing";

import { Role } from "@/config/enums";
import { useToast } from "@/hooks/use-toast";
import { setEmail } from "@/utils/local-storage";

import { login } from "@/api";
import { useSendOtp } from "@/hooks";
import { useAuthStore } from "@/store";

export const useLogin = ({ role }: { role: Role }) => {
  const router = useRouter();

  const { toast } = useToast();
  const { setAuthData } = useAuthStore();

  const { mutate } = useSendOtp({ role, redirectTo: "/verification-otp" });

  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginBody) => login(data),
    onSuccess: (data) => {
      toast({
        title: "Login",
        description: data.message ?? "Login successfully",
      });
      setAuthData({
        ...data.data,
        user: {
          ...data.data.user,
          birth_date: data.data.user.birth_date || undefined,
        },
      });
    },
    onError: (error, variables) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Login",
          description: message ?? "Login failed",
        });
        if (message == "Please verify your email address first") {
          setEmail(variables.email);
          mutate({ email: variables.email });
          router.push(`/${role}/auth/verification-otp`);
        }
      }
    },
  });
};
