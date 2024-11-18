import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { sendOtp } from "@/api/auth/send-otp";
import { EMAIL } from "@/config/constants";
import { useRouter } from "@/i18n/routing";
import { Role } from "@/config/enums";

export const useSendOtp = ({ role }: { role: Role }) => {
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
      localStorage.setItem(EMAIL, variables.email);
      router.push(`/auth/${role}/forget-password-otp`);
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
