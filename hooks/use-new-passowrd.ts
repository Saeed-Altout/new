import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { newPassword } from "@/api/auth/new-password";
import { useRouter } from "@/i18n/routing";
import { Role } from "@/config/enums";

export const useNewPassword = ({ role }: { role: Role }) => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationKey: ["new-password"],
    mutationFn: (data: NewPasswordBody) => newPassword(data),
    onSuccess: (data) => {
      toast({
        title: "New password",
        description: data.message ?? "Change your password successfully",
      });
      router.push(`/auth/${role}/login`);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "New Password",
          description: message ?? "Change your password failed",
        });
      }
    },
  });
};
