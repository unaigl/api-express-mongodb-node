import { Router } from "express";
import { createProfile } from "../controller/profile.controller";
import { shcemaValidator } from "../middlewares/shcemaValidator.middleware";
import { profileSchema, updateProfileSchema } from "../schema/profile.schema";

const router = Router();

router.post("/create", shcemaValidator(profileSchema), createProfile);
router.put("/update/:id", shcemaValidator(updateProfileSchema), createProfile);

export default router;
