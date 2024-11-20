import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { GET_CATEGORIES_ENDPOINT } from "@/config/constants";

export const getCategories = async ({
  locale,
}: {
  locale: string;
}): Promise<GetCategoriesResponse> => {
  try {
    const response: AxiosResponse<GetCategoriesResponse> =
      await apiClient.get<GetCategoriesResponse>(
        `${locale}/${GET_CATEGORIES_ENDPOINT}`
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
