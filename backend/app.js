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

const app = express();
config({ path: "./config/.env" });

  app.use(
    cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Corrected to lowercase 'c'
    allowedHeaders: ["Content-Type", "Authorization"], // Add other headers as needed
    })
  );
  
app.use(cookieParser());//this is a  middleware to get our cookies.
app.use(express.json());//this is a  middleware to convert data(json type) to string form.
app.use(express.urlencoded({ extended: true }));  

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnection();

app.use(errorMiddleware);

export default app;
