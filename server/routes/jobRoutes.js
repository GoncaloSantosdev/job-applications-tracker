import express from "express";
const router = express.Router();
// Controllers
import {
  createJob,
  deleteJob,
  getJob,
  getJobs,
  showStats,
  updateJob,
} from "../controllers/jobController.js";
// Middleware
import { protect } from "../middlewares/authMiddleware.js";

router.route("/").get(protect, getJobs).post(protect, createJob);
router.route("/stats").get(protect, showStats);
router
  .route("/:id")
  .get(protect, getJob)
  .put(protect, updateJob)
  .delete(protect, deleteJob);

export default router;
