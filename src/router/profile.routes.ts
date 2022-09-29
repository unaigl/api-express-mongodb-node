import { Router } from "express";
import { createProfile, updateProfile } from "../controller/profile.controller";
import { shcemaValidator } from "../middlewares/shcemaValidator.middleware";
import { ProfileSchema, UpdateProfileSchema } from "../schema/profile.schema";

const router = Router();

router.post("/create", shcemaValidator(ProfileSchema), createProfile);
router.put("/update/:id", shcemaValidator(UpdateProfileSchema), updateProfile);

export default router;
