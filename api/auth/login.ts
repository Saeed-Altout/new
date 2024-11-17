import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { LOGIN_ENDPOINT } from "@/config/constants";

export const login = async (data: LoginBody) => {
  try {
    const response: AxiosResponse<LoginResponse> =
      await apiClient.post<LoginResponse>(LOGIN_ENDPOINT, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
