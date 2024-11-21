import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { updateProfilePassword } from "@/api/dashboard/update-profile-password";

export const useUpdateProfilePassword = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["update-profile-password"],
    mutationFn: (data: UpdateProfilePasswordBody) =>
      updateProfilePassword(data),
    onSuccess: (data) => {
      toast({
        title: "Update Password",
        description: data.message ?? "Update password successfully",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Update Password",
          description: message ?? "Update password failed",
        });
      }
    },
  });
};
