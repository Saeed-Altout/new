import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { login } from "@/api/auth/login";
import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "@/i18n/routing";
import { Role } from "@/config/enums";
import { useSendOtp } from "@/hooks/use-send-otp";
import { EMAIL } from "@/config/constants";

export const useLogin = ({ role }: { role: Role }) => {
  const { toast } = useToast();
  const router = useRouter();
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
      setAuthData(data.data);
    },
    onError: (error, variables) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Login",
          description: message ?? "Login failed",
        });
        if (message == "Please verify your email address first") {
          localStorage.setItem(EMAIL, variables.email);
          mutate({ email: variables.email });
          router.push(`/auth/${role}/verification-otp`);
        }
      }
    },
  });
};
