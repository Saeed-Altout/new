import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { VERIFY_OTP_ENDPOINT } from "@/config/constants";

export const verifyOtp = async (data: VerifyOtpBody) => {
  try {
    const response: AxiosResponse<VerifyOtpResponse> =
      await apiClient.post<VerifyOtpResponse>(VERIFY_OTP_ENDPOINT, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
