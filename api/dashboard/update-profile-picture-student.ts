import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { UPDATE_PROFILE_PICTURE_STUDENT_ENDPOINT } from "@/config/constants";

export const updateProfilePictureStudent = async (
  data: UpdateProfilePictureStudentBody
) => {
  const formData = new FormData();

  formData.append("profile_picture", data.profile_picture);
  formData.append("_method", data._method);

  try {
    const response: AxiosResponse<UpdateProfilePictureStudentResponse> =
      await apiClient.post<UpdateProfilePictureStudentResponse>(
        UPDATE_PROFILE_PICTURE_STUDENT_ENDPOINT,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
