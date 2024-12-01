// Auth
import { useLogin } from "./auth/use-login";
import { useVerifyEmail } from "./auth/use-verify-email";
import { useRegister } from "./auth/use-register";
import { useLogout } from "./auth/use-logout";
import { useSendOtp } from "./auth/use-send-otp";
import { useVerifyOtp } from "./auth/use-verify-otp";
import { useNewPassword } from "./auth/use-new-password";

// Dashboard
import { useUpdateProfileInfoStudent } from "./dashboard/use-update-profile-info-student";
import { useUpdateProfilePictureStudent } from "./dashboard/use-update-profile-picture-student";
import { useUpdateProfileInfoCompany } from "./dashboard/use-update-profile-info-company";
import { useUpdateProfilePictureCompany } from "./dashboard/use-update-profile-picture-company";
import { useUpdateProfilePassword } from "./dashboard/use-update-profile-password";

// Root
import { useGetAllCourses } from "./root/use-get-all-courses";
import { useGetCategories } from "./root/use-get-categories";
import { useGetExpertTeacher } from "./root/use-get-expert-teacher";
import { useGetMostRecommendedOnline } from "./root/use-get-most-recommended-online";
import { useGetMostRecommendedSeminar } from "./root/use-get-most-recommended-seminar";
import { useSearchAdvanced } from "./root/use-search-advanced";
export {
  useLogin,
  useRegister,
  useLogout,
  useNewPassword,
  useVerifyEmail,
  useVerifyOtp,
  useSendOtp,
  useUpdateProfileInfoStudent,
  useUpdateProfilePictureStudent,
  useUpdateProfileInfoCompany,
  useUpdateProfilePictureCompany,
  useUpdateProfilePassword,
  useGetAllCourses,
  useGetCategories,
  useGetExpertTeacher,
  useGetMostRecommendedOnline,
  useGetMostRecommendedSeminar,
  useSearchAdvanced,
};
