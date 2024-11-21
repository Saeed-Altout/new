import * as z from "zod";

export const newPasswordSchema = z.object({
  password: z.string().min(8),
  password_confirmation: z.string().min(8),
});
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remember_me: z.boolean().default(false),
});

export const forgetPasswordOtpSchema = z.object({
  otp: z.string().min(6),
});
export const verificationOtpSchema = z.object({
  otp: z.string().min(6),
});

export const forgetPasswordSchema = z.object({
  email: z.string().email(),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  password_confirmation: z.string().min(8),
  terms: z.boolean().default(false),
});

export const createNewTeamSchema = z.object({
  name: z.string().min(2),
  members: z.array(z.object({ email: z.string().email() })),
});

export const filterSchema = z.object({
  name: z.string().optional(),
  date: z.date().optional(),
  time: z.string().optional(),
  branch: z.string().optional(),
  region: z.string().optional(),
  type: z.string().optional(),
});

export const profileSchema = z.object({
  full_name: z.string().optional(),
  birth_date: z.date().optional(),
  phone: z.string().optional(),
  gender: z.string().optional(),
  profile_picture: z.string().optional(),
});

export const passwordSchema = z.object({
  new_password: z.string().min(8),
  current_password: z.string().min(8),
});
