import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(3),
  age: z.number().min(1),
});
export const updateProfileSchema = z.object({
  name: z.string().min(1),
  age: z.number().min(1),
});
