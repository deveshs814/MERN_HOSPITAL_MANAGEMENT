import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRouter from "../backend/router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

// Initialize environment variables
config({ path: "./config/.env" });

const app = express();

// Log environment variables for debugging
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);
console.log("DASHBOARD_URL:", process.env.DASHBOARD_URL);

// CORS configuration
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL], // Allowed origins
    origin: true, // Allow requests from all origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    credentials: true, // Allow cookies
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Middleware
app.use(cookieParser()); // Middleware to parse cookies
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp", // Temporary directory for file uploads
  })
);

// Test route
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "Backend is connected!" });
});

// Routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

// Database connection
dbConnection();

// Error middleware
app.use(errorMiddleware);

export default app;
