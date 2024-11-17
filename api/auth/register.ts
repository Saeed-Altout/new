import { apiClient } from "@/api/config";
import { REGISTER_STUDENT_ENDPOINT } from "@/config/constants";
import { AxiosResponse } from "axios";

export const registerStudent = async (data: RegisterStudentBody) => {
  try {
    const response: AxiosResponse<RegisterStudentResponse> =
      await apiClient.post<RegisterStudentResponse>(
        REGISTER_STUDENT_ENDPOINT,
        data
      );
    return response.data;
  } catch (error) {
    throw error;
  }
};
