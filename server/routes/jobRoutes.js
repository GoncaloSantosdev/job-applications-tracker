import express from "express";
const router = express.Router();
// Controllers
import {
  createJob,
  deleteJob,
  getJob,
  getJobs,
  updateJob,
} from "../controllers/jobController.js";

router.route("/").get(getJobs).post(createJob);
router.route("/:id").get(getJob).put(updateJob).delete(deleteJob);

export default router;
