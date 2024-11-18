import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { SEND_OTP_ENDPOINT } from "@/config/constants";

export const sendOtp = async (data: SendOtpBody) => {
  try {
    const response: AxiosResponse<SendOtpResponse> =
      await apiClient.post<SendOtpResponse>(SEND_OTP_ENDPOINT, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
