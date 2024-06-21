import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/dbConnection";
// import cookieParser from "cookie-parser";

connectDB();

const app = express();
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/test', async (req: Request, res: Response) => {
    res.json({ message: "Hello from Express End Point"});
})

app.listen(8000, () => {
    console.log("Backend Server running on localhost:8000");
  });