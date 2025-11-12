import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ MongoDB Connection Failed:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 Server is running and connected to MongoDB!");
});

// Server Listen
app.listen(process.env.PORT || 5000, () => {
  console.log(`⚡ Server started on port ${process.env.PORT}`);
});