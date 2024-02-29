import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

mongoose.connect(process.env.DATABASE_URL as string).then(() => {
  console.log("Connected to database!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
