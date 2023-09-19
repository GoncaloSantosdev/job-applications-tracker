import path from "path";
import "express-async-errors";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import cloudinary from "cloudinary";
// DB Connection
import connectDB from "./config/db.js";
// Routes
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
// Middlewares
import { notFound, errorHandler } from "./middlewares/errorHandler.js";

const PORT = process.env.PORT || 5000;
connectDB(); // Connect to MongoDB

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allow sending cookies
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = path.resolve(); // set __dirname to current directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
