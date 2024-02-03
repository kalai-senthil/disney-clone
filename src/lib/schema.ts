import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6).max(15),
});
