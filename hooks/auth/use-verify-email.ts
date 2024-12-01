import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { Role } from "@/config/enums";
import { useRouter } from "@/i18n/routing";
import { useToast } from "@/hooks/use-toast";
import { removeEmail } from "@/utils/local-storage";

import { verifyEmail } from "@/api";

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
      removeEmail();
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
