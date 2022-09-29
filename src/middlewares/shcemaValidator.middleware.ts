import { Response, Request, NextFunction } from "express";
// import { profileSchema } from "../schema/profile.schema";
import { ZodError, AnyZodObject } from "zod";

export const shcemaValidator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // profileSchema.parse(req.body);
      schema.parse(req.body);
      console.log(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.send(
          error.issues.map((e) => ({ type: e.code, message: e.message }))
        );
      }
      return res.status(500).json("Server error");
    }
  };
