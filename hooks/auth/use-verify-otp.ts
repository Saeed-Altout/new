import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "@/i18n/routing";
import { useToast } from "@/hooks/use-toast";
import { setAccessToken } from "@/utils/token";
import { removeEmail } from "@/utils/local-storage";

import { verifyOtp } from "@/api";

export const useVerifyOtp = (role: string) => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationKey: ["verify-email"],
    mutationFn: (data: VerifyOtpBody) => verifyOtp(data),
    onSuccess: (data) => {
      toast({
        title: "Verify otp",
        description: data.message ?? "Verify otp successfully",
      });
      setAccessToken(data.data.token);
      removeEmail();
      router.push(`/${role}/auth/new-password`);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Verify otp",
          description: message ?? "Verify otp failed",
        });
      }
    },
  });
};
