import { Request, Response, NextFunction } from "express"
import { ZodError, AnyZodObject } from "zod"

export const validateSchema =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      })
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          errors: error.issues.map((issue: any) => ({
            message: issue.message,
          })),
        })
      }
    }
  }
