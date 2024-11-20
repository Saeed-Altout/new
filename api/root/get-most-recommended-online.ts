import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { GET_MOST_RECOMMENDED_ONLINE_ENDPOINT } from "@/config/constants";

export const getMostRecommendedOnline = async ({
  locale,
}: {
  locale: string;
}): Promise<GetMostRecommendedOnlineResponse> => {
  try {
    const response: AxiosResponse<GetMostRecommendedOnlineResponse> =
      await apiClient.get<GetMostRecommendedOnlineResponse>(
        `${locale}/${GET_MOST_RECOMMENDED_ONLINE_ENDPOINT}`
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
