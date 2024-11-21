// Auth

// Login
import { useLogin } from "./auth/use-login";

// New Account
import { useVerifyEmail } from "./auth/use-verify-email";
import { useRegister } from "./auth/use-register";

// Logout
import { useLogout } from "./auth/use-logout";

// Forget Password
import { useSendOtp } from "./auth/use-send-otp";
import { useVerifyOtp } from "./auth/use-verify-otp";
import { useNewPassword } from "./auth/use-new-password";

// Dashboard
import { useUpdateProfileInfoStudent } from "./dashboard/use-update-profile-info-student";
import { useUpdateProfilePictureStudent } from "./dashboard/use-update-profile-picture-student";

import { useUpdateProfileInfoCompany } from "./dashboard/use-update-profile-info-company";
import { useUpdateProfilePictureCompany } from "./dashboard/use-update-profile-picture-company";

import { useUpdateProfilePassword } from "./dashboard/use-update-profile-password";

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
};
