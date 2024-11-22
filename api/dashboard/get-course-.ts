import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { GET_COURSE_ENDPOINT } from "@/config/constants";

export const getCourse = async ({
  locale,
  id,
}: {
  locale: string;
  id: string;
}): Promise<GetCourseResponse> => {
  try {
    const response: AxiosResponse<GetCourseResponse> =
      await apiClient.get<GetCourseResponse>(
        `${locale}/${GET_COURSE_ENDPOINT}/${id}/lessons`
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
