import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
dotenv.config();
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;
connectDB(); // Connect to MongoDB

const app = express();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend domain
    credentials: true, // Allow sending cookies
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
