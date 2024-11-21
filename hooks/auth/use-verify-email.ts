import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "@/i18n/routing";

import { EMAIL } from "@/config/constants";
import { useToast } from "@/hooks/use-toast";
import { verifyEmail } from "@/api/auth/verify-email";
import { Role } from "@/config/enums";

export const useVerifyEmail = ({ role }: { role: Role }) => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationKey: ["verify-email"],
    mutationFn: (data: VerifyEmailBody) => verifyEmail(data),
    onSuccess: (data) => {
      toast({
        title: "Verify email",
        description: data.message ?? "Verify email successfully",
      });
      localStorage.removeItem(EMAIL);
      router.push(`/${role}/auth/login`);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Verify email",
          description: message ?? "Verify email failed",
        });
      }
    },
  });
};
