import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { UPDATE_PROFILE_COMPANY_ENDPOINT } from "@/config/constants";

export const updateProfileInfoCompany = async (
  data: UpdateProfileInfoCompanyBody
) => {
  try {
    const response: AxiosResponse<UpdateProfileInfoCompanyResponse> =
      await apiClient.post<UpdateProfileInfoCompanyResponse>(
        UPDATE_PROFILE_COMPANY_ENDPOINT,
        data
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
