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

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(protect, logoutUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/admin").get(protect, admin, getAppStats);

export default router;
