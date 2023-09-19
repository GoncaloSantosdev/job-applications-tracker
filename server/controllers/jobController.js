import mongoose from "mongoose";
// Model
import Job from "../models/jobModel.js";
// Dayjs
import day from "dayjs";

// @desc    Create Job
// @route   POST /api/jobs
// @access  Private
const createJob = async (req, res) => {
  const job = await new Job({
    user: req.user._id,
    ...req.body,
  });

  const createdJob = await job.save();
  res.status(201).json({ createdJob });
};

// @desc    Get Jobs
// @route   GET /api/jobs
// @access  Private
const getJobs = async (req, res) => {
  const jobs = await Job.find({ user: req.user._id });
  res.status(200).json(jobs);
};

// @desc    Get Single Job
// @route   GET /api/jobs/:id
// @access  Private
const getJob = async (req, res) => {
  const { id } = req.params;

  const job = await Job.findById(id);

  if (job) {
    res.status(200).json({ job });
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
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

// @desc    Show Stats
// @route   GET /api/jobs/stats
// @access  Private
const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { user: new mongoose.Types.ObjectId(req.user._id) } },
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { user: new mongoose.Types.ObjectId(req.user._id) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { "_id.year": -1, "_id.month": -1 },
    },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format("MMM YY");

      return { date, count };
    })
    .reverse();

  res.status(200).json({ defaultStats, monthlyApplications });
};

export { getJobs, createJob, getJob, updateJob, deleteJob, showStats };
