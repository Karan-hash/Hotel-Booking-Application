import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const connectDB = async (): Promise<void> => {
  const mongoURI: string = process.env.DB_URL || "";
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB connected successfully: ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};
export default connectDB;
