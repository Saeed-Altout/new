import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { getAccessToken, getUserMetadata, setAuthData } from "@/utils/token";
import { updateProfilePictureStudent } from "@/api/dashboard/update-profile-picture-student";

export const useUpdateProfilePictureStudent = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["update-profile-picture-student"],
    mutationFn: (data: UpdateProfilePictureStudentBody) =>
      updateProfilePictureStudent(data),
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
