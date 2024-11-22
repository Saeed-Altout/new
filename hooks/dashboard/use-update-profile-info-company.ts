import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { updateProfileInfoCompany } from "@/api/dashboard/update-profile-info-company";
import { getAccessToken, getUserMetadata, setAuthData } from "@/utils/token";

export const useUpdateProfileInfoCompany = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["update-profile-info-company"],
    mutationFn: (data: UpdateProfileInfoCompanyBody) =>
      updateProfileInfoCompany(data),
    onSuccess: (data) => {
      toast({
        title: "Update Profile",
        description: data.message ?? "Update profile successfully",
      });
      if (data.data) {
        const cloneMetadata = getUserMetadata();
        const token = getAccessToken();

        if (cloneMetadata && token) {
          setAuthData({
            ...cloneMetadata,
            user: { ...cloneMetadata.user, ...data.data },
            token,
          });
        }
      }
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
