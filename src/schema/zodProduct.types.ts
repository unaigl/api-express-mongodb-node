import { z } from "zod"

export const createProductZod = z.object({
  body: z.object({
    name: z.string().min(3),
    price: z.number().min(1),
  }),
})

export const updateProductZod = z.object({
  body: z.object({
    name: z.string().min(3),
    price: z.number().min(1),
  }),
  params: z.object({
    id: z.string().min(1),
  }),
  query: z.object({
    tittle: z.string().min(3).optional(),
  }),
})

export type CreateProductType = z.infer<typeof createProductZod>["body"]
