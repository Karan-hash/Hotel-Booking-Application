import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/dbConnection";
// import cookieParser from "cookie-parser";
import userRoutes from "./routes/users";

connectDB();

const app = express();
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

app.listen(8000, () => {
    console.log("Backend Server running on localhost:8000");
  });