import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { REGISTER_ENDPOINT } from "@/config/constants";

export const register = async (data: RegisterBody) => {
  try {
    const response: AxiosResponse<RegisterResponse> =
      await apiClient.post<RegisterResponse>(REGISTER_ENDPOINT, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
