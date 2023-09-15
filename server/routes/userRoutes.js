import express from "express";
const router = express.Router();
// Controllers
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";
// Middlewares
import { admin, protect } from "../middlewares/authMiddleware.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(protect, logoutUser);

export default router;
