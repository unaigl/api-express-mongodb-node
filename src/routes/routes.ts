import { Router } from "express";
import {
  getHomePage,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} from "./route.controller";

const router = Router();

router.get("/", getHomePage);
router.get("/profile/:id", getProfile);
router.post("/create", createProfile);
router.put("/update/:id", updateProfile);
router.delete("/delete/:id", deleteProfile);

export default router;
