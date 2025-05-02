import express from "express";
import incidentRoutes from "./routes/incident.routes";
import dotenv from "dotenv";
import connectDB from "./dbConfig/db";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", incidentRoutes);

// MongoDB Connection
connectDB();

export default app;
