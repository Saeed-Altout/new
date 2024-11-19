import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { updateProfileInfoStudent } from "@/api/dashboard/update-profile-info-student";

export const useProfileInfoStudent = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["update-profile-info-student"],
    mutationFn: (data: UpdateProfileInfoStudentBody) =>
      updateProfileInfoStudent(data),
    onSuccess: (data) => {
      toast({
        title: "Update Profile",
        description: data.message ?? "Update profile successfully",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Update Profile",
          description: message ?? "Update profile failed",
        });
      }
    },
  });
};
