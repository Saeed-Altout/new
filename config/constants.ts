// Endpoints
export const LOGIN_ENDPOINT = "login";
export const SEND_OTP_ENDPOINT = "send-otp";
export const REGISTER_ENDPOINT = "register";
export const VERIFY_EMAIL_ENDPOINT = "email/verify";
export const VERIFY_OTP_ENDPOINT = "verify-otp";
export const LOGOUT_ENDPOINT = "logout";
export const NEW_PASSWORD_ENDPOINT = "reset-password";
export const UPDATE_PROFILE_PASSWORD_ENDPOINT = "profile/change-password";
export const UPDATE_PROFILE_STUDENT_ENDPOINT = "student/profile/update-profile";
export const UPDATE_PROFILE_COMPANY_ENDPOINT = "company/profile/update-profile";
export const UPDATE_PROFILE_PICTURE_STUDENT_ENDPOINT =
  "student/profile/update-picture";
export const UPDATE_PROFILE_PICTURE_COMPANY_ENDPOINT =
  "company/profile/update-picture";
export const GET_MOST_RECOMMENDED_SEMINAR_ENDPOINT = "courses/seminar-courses";
export const GET_MOST_RECOMMENDED_ONLINE_ENDPOINT = "courses/online-courses";
export const SEARCH_ADVANCED_ENDPOINT = "courses/courses-search";
export const GET_ALL_COURSES_ENDPOINT = "courses";
export const GET_CATEGORIES_ENDPOINT = "categories";
export const GET_EXPERT_TEACHER_ENDPOINT = "teachers/expert";
export const GET_COURSE_ENDPOINT = "courses";

//
const NAME = "cws-in-akademie";
// Special Keys For LocalStorage
export const EMAIL = `${NAME}-email`;
export const TOKEN_KEY = `${NAME}-token`;
export const USER_KEY = `${NAME}-user-metadata`;
export const SEARCH_COURSES_KEY = `${NAME}-search-courses`;
