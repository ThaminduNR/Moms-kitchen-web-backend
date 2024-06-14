import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";
import { v2 as cloudinary } from "cloudinary";
import myRestaurantRoute from "./routes/MyRestaurantRoute";

// connect DB
mongoose
  .connect(process.env.MONGODB_CONNECTION as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(express.json());
app.use(cors());

// verfy Connect DB
app.listen(7000, () => {
  console.log("Server is running on port 7000");
});

//API routes

// /api/my/user
app.use("/api/my/user", myUserRoute);

// /api/my/restaurant
app.use("/api/my/restaurant", myRestaurantRoute);
