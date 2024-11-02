import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
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
