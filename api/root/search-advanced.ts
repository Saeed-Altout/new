import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { SEARCH_ADVANCED_ENDPOINT } from "@/config/constants";

export const searchAdvanced = async ({
  locale,
  data,
}: {
  locale: string;
  data: SearchAdvancedBody;
}) => {
  try {
    const response: AxiosResponse<SearchAdvancedResponse> =
      await apiClient.post<SearchAdvancedResponse>(
        `${locale}/${SEARCH_ADVANCED_ENDPOINT}`,
        data
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
