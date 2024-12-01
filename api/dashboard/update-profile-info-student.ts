import { AxiosResponse } from "axios";

import { apiClient } from "@/api/config";
import { UPDATE_PROFILE_STUDENT_ENDPOINT } from "@/config/constants";

export const updateProfileInfoStudent = async (
  data: UpdateProfileInfoStudentBody
): Promise<UpdateProfileInfoStudentResponse> => {
  try {
    const response: AxiosResponse<UpdateProfileInfoStudentResponse> =
      await apiClient.post<UpdateProfileInfoStudentResponse>(
        UPDATE_PROFILE_STUDENT_ENDPOINT,
        data
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
