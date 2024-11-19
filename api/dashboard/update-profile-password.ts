import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { UPDATE_PROFILE_PASSWORD_ENDPOINT } from "@/config/constants";

export const updateProfilePassword = async (
  data: UpdateProfilePasswordBody
) => {
  try {
    const response: AxiosResponse<UpdateProfilePasswordResponse> =
      await apiClient.patch<UpdateProfilePasswordResponse>(
        UPDATE_PROFILE_PASSWORD_ENDPOINT,
        data
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
