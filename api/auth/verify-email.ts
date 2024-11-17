import { apiClient } from "@/api/config";
import { VERIFY_EMAIL_ENDPOINT } from "@/config/constants";
import { AxiosResponse } from "axios";

export const verifyEmail = async (data: VerifyEmailBody) => {
  try {
    const response: AxiosResponse<VerifyEmailResponse> =
      await apiClient.post<VerifyEmailResponse>(VERIFY_EMAIL_ENDPOINT, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
