import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { getAccessToken, getUserMetadata, setAuthData } from "@/utils/token";
import { updateProfilePictureCompany } from "@/api/dashboard/update-profile-picture-company";

export const useUpdateProfilePictureCompany = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["update-profile-picture-company"],
    mutationFn: (data: UpdateProfilePictureCompanyBody) =>
      updateProfilePictureCompany(data),
    onSuccess: (data) => {
      toast({
        title: "Update Profile Picture",
        description: data.message ?? "Update profile picture successfully",
      });
      if (data.data) {
        const cloneMetadata = getUserMetadata();
        const token = getAccessToken();

        if (cloneMetadata && token) {
          setAuthData({
            ...cloneMetadata,
            user: {
              ...cloneMetadata.user,
              image_url: data?.data.profile_picture_url,
            },
            token,
          });
        }
      }
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Update Profile Picture",
          description: message ?? "Update profile picture failed",
        });
      }
    },
  });
};
