import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { UPDATE_PROFILE_PICTURE_COMPANY_ENDPOINT } from "@/config/constants";

export const updateProfilePictureCompany = async (
  data: UpdateProfilePictureCompanyBody
) => {
  const formData = new FormData();

  formData.append("profile_picture", data.profile_picture);
  formData.append("_method", data._method);

  try {
    const response: AxiosResponse<UpdateProfilePictureCompanyResponse> =
      await apiClient.post<UpdateProfilePictureCompanyResponse>(
        UPDATE_PROFILE_PICTURE_COMPANY_ENDPOINT,
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
