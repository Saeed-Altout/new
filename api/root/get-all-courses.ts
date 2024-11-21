import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { GET_ALL_COURSES_ENDPOINT } from "@/config/constants";

export const getAllCourses = async ({
  locale,
}: {
  locale: string;
}): Promise<GetAllCoursesResponse> => {
  try {
    const response: AxiosResponse<GetAllCoursesResponse> =
      await apiClient.get<GetAllCoursesResponse>(
        `${locale}/${GET_ALL_COURSES_ENDPOINT}`
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
