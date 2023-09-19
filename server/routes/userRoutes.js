import express from "express";
const router = express.Router();
// Controllers
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAppStats,
} from "../controllers/userController.js";
// Middlewares
import { admin, protect } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(protect, logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(upload.single("avatar"), protect, updateUserProfile);
router.route("/admin").get(protect, admin, getAppStats);

export default router;
