import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { GET_MOST_RECOMMENDED_SEMINAR_ENDPOINT } from "@/config/constants";

export const getMostRecommendedSeminar = async ({
  locale,
}: {
  locale: string;
}): Promise<GetMostRecommendedSeminarResponse> => {
  try {
    const response: AxiosResponse<GetMostRecommendedSeminarResponse> =
      await apiClient.get<GetMostRecommendedSeminarResponse>(
        `${locale}/${GET_MOST_RECOMMENDED_SEMINAR_ENDPOINT}`
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
