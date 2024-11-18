import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { NEW_PASSWORD_ENDPOINT } from "@/config/constants";

export const newPassword = async (data: NewPasswordBody) => {
  try {
    const response: AxiosResponse<NewPasswordResponse> =
      await apiClient.post<NewPasswordResponse>(NEW_PASSWORD_ENDPOINT, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
