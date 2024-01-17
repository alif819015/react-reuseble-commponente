import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: "Name is Requered" }),
  email: z.string().email().min(1, { message: "Email is Requered" }),
  password: z.string().min(8, "Your Password is to Short"),
});

export type TNormalForm = z.infer<typeof SignUpSchema>;
