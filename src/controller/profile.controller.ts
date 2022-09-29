import { Response, Request } from "express";
import { ZodError } from "zod";
import { shcemaValidator } from "../middlewares/shcemaValidator.middleware";

export const createProfile = (req: Request, res: Response) => {
  try {
    /* DATA already CHECKED using a middleware*/

    /* RETURN HTML OR... */
    res.json("getting home");
  } catch (error) {
    /* ZOD user input types errors */
    if (error instanceof ZodError) {
      return res.json(error.issues.map((e) => ({ Message: e.message })));
    }

    /* SERVER error */
    return res.status(500).json("Server error");
  }
};

export const updateProfile = (req: Request, res: Response) => {
  try {
    /* DATA already CHECKED using a middleware*/

    /* RETURN HTML OR... */
    res.json("updating");
  } catch (error) {
    /* ZOD user input types errors */
    if (error instanceof ZodError) {
      return res.json(error.issues.map((e) => ({ Message: e.message })));
    }

    /* SERVER error */
    return res.status(500).json("Server error");
  }
};
