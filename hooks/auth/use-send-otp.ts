import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { Role } from "@/config/enums";
import { useRouter } from "@/i18n/routing";
import { useToast } from "@/hooks/use-toast";
import { setEmail } from "@/utils/local-storage";

import { sendOtp } from "@/api";

export const useSendOtp = ({
  role,
  redirectTo = "/forget-password-otp",
}: {
  role: Role;
  redirectTo?: string;
}) => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationKey: ["send-otp"],
    mutationFn: (data: SendOtpBody) => sendOtp(data),
    onSuccess: (data, variables) => {
      toast({
        title: "Send Email",
        description: data.message ?? "Send email successfully",
      });
      setEmail(variables.email);
      router.push(`/${role}/auth${redirectTo ?? "/forget-password-otp"}`);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Send Email",
          description: message ?? "Send email failed",
        });
      }
    },
  });
};
