import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { LOGOUT_ENDPOINT } from "@/config/constants";

export const logout = async () => {
  try {
    const response: AxiosResponse<LogoutResponse> =
      await apiClient.delete<LogoutResponse>(LOGOUT_ENDPOINT);
    return response.data;
  } catch (error) {
    throw error;
  }
};
