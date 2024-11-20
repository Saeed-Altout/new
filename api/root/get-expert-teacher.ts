import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { GET_EXPERT_TEACHER_ENDPOINT } from "@/config/constants";

export const getExpertTeacher = async ({
  locale,
}: {
  locale: string;
}): Promise<GetExpertTeacherResponse> => {
  try {
    const response: AxiosResponse<GetExpertTeacherResponse> =
      await apiClient.get<GetExpertTeacherResponse>(
        `${locale}/${GET_EXPERT_TEACHER_ENDPOINT}`
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
