import { z } from "zod";

export const profileSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    age: z.number().min(1),
  }),
});

export const updateProfileSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    age: z.number().min(1),
  }),
  params: z.object({ id: z.string().min(2) }),
  query: z.object({ tittle: z.string().min(3) /* .optional() */ }),
  // header: z.object({}),
});
