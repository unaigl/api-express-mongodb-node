import { Response, Request } from "express";
import { ZodError } from "zod";
import {
  CreateProductType,
  CreateUpdateProfileBodyType,
  CreateUpdateProfileParamsType,
  CreateUpdateProfileQueryType,
} from "../schema/profile.schema";

export const createProfile = (
  req: Request<unknown, unknown, CreateProductType>,
  res: Response
) => {
  try {
    /* DATA already CHECKED using a middleware in the controller*/
    res.json("getting home"); /* RETURN HTML OR... */
  } catch (error) {
    /* ZOD user input types errors */
    if (error instanceof ZodError) {
      return res.json(error.issues.map((e) => ({ Message: e.message })));
    }
    /* SERVER error */
    return res.status(500).json("Server error");
  }
};

export const updateProfile = (
  req: Request<
    CreateUpdateProfileParamsType,
    unknown,
    CreateUpdateProfileBodyType,
    CreateUpdateProfileQueryType
  >,
  res: Response
) => {
  try {
    /* DATA already CHECKED using a middleware in the controller*/
    res.json("updating"); /* RETURN HTML OR... */
  } catch (error) {
    /* ZOD user input types errors */
    if (error instanceof ZodError) {
      return res.json(error.issues.map((e) => ({ Message: e.message })));
    }

    /* SERVER error */
    return res.status(500).json("Server error");
  }
};
