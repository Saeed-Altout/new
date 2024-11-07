import * as z from "zod";

export const newPasswordSchema = z.object({
  password: z.string().min(8),
  confirmed_password: z.string().min(8),
});
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const forgetPasswordOtpSchema = z.object({
  code: z.string().min(6),
});
export const verificationOtpSchema = z.object({
  code: z.string().min(6),
});

export const forgetPasswordSchema = z.object({
  email: z.string().email(),
});

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmed_password: z.string().min(8),
});

export const createNewTeamSchema = z.object({
  name: z.string().min(2),
  members: z.array(z.object({ email: z.string().email() })),
});

export const filterSchema = z.object({
  name: z.string().min(2),
  date: z.string().min(2),
  time: z.string().min(2),
  branch: z.string().min(2),
  region: z.string().min(2),
  type: z.string().min(2),
});
