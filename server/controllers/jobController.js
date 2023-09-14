// Model
import Job from "../models/jobModel.js";

// @desc    Create Job
// @route   POST /api/jobs
// @access  Private
const createJob = async (req, res) => {
  const job = await Job.create(req.body);

  res.status(201).json({ job });
};

// @desc    Get Jobs
// @route   GET /api/jobs
// @access  Private
const getJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json(jobs);
};

// @desc    Get Single Job
// @route   GET /api/jobs/:id
// @access  Private
const getJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findById(id);

  if (!job) {
    res.status(404);
    throw new Error("Resource not found");
  }

  res.status(200).json({ job });
};

// @desc    Update Job
// @route   GET /api/jobs/:id
// @access  Private
const updateJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!job) {
    res.status(404);
    throw new Error("Resource not found");
  }

  res.status(200).json({ msg: "Updated Job", job });
};

// @desc    Delete Job
// @route   DELETE /api/jobs/:id
// @access  Private
const deleteJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findByIdAndDelete(id);

  if (!job) {
    res.status(404);
    throw new Error("Resource not found");
  }

  res.status(200).json({ msg: "Job Deleted", job });
};

export { getJobs, createJob, getJob, updateJob, deleteJob };
