// to start a server
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/dbconfig.js";
import authRoutes from "./Routs/authRoutes.js";
import postRoutes from "./Routs/postRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to sports backend");
});

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
