// Auth
import { login } from "./auth/login";
import { register } from "./auth/register";
import { logout } from "./auth/logout";
import { newPassword } from "./auth/new-password";
import { sendOtp } from "./auth/send-otp";
import { verifyEmail } from "./auth/verify-email";
import { verifyOtp } from "./auth/verify-otp";

// Dashboard
import { getCourse } from "./dashboard/get-course-";
import { updateProfileInfoCompany } from "./dashboard/update-profile-info-company";
import { updateProfilePictureCompany } from "./dashboard/update-profile-picture-company";
import { updateProfileInfoStudent } from "./dashboard/update-profile-info-student";
import { updateProfilePictureStudent } from "./dashboard/update-profile-picture-student";
import { updateProfilePassword } from "./dashboard/update-profile-password";

// Root
import { getAllCourses } from "./root/get-all-courses";
import { getCategories } from "./root/get-categories";
import { getExpertTeacher } from "./root/get-expert-teacher";
import { getMostRecommendedOnline } from "./root/get-most-recommended-online";
import { getMostRecommendedSeminar } from "./root/get-most-recommended-seminar";
import { searchAdvanced } from "./root/search-advanced";

export {
  login,
  register,
  logout,
  verifyEmail,
  verifyOtp,
  newPassword,
  sendOtp,
  updateProfileInfoCompany,
  updateProfileInfoStudent,
  updateProfilePassword,
  updateProfilePictureCompany,
  updateProfilePictureStudent,
  getAllCourses,
  getCategories,
  getExpertTeacher,
  getMostRecommendedOnline,
  getMostRecommendedSeminar,
  getCourse,
  searchAdvanced,
};
