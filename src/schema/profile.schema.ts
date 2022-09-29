import { z } from "zod";

export const ProfileSchema = z.object({
  body: z.object({
    name: z.string().min(3),
    age: z.number().min(1),
  }),
});

export const UpdateProfileSchema = z.object({
  body: z.object({
    name: z.string().min(1),
    age: z.number().min(1),
  }),
  params: z.object({ id: z.string().min(2) }),
  query: z.object({ tittle: z.string().min(3) /* .optional() */ }),
  // header: z.object({}),
});

export type CreateProductType = z.infer<typeof ProfileSchema>["body"]; // Extracting the body object

export type CreateUpdateProfileBodyType = z.infer<
  typeof UpdateProfileSchema
>["body"];
export type CreateUpdateProfileParamsType = z.infer<
  typeof UpdateProfileSchema
>["params"];
export type CreateUpdateProfileQueryType = z.infer<
  typeof UpdateProfileSchema
>["query"];
