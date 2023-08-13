import express from "express";
import * as dotenv from "dotenv";
import "./database/database";
import cors from "cors";

import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import eventRouter from "./routes/event";

dotenv.config();

//? Create App
const app = express();

//? Enable CORS
app.use(cors());

//? Middlewares
app.use(express.json()); // NOTE: This middleware transforms the req.body to json

const PORT = process.env.PORT || 4000;

//? Routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/events", eventRouter);

//? Database connection
// NOTE: The process.env.MONGO_URI could return string or undefined and for that reason it is necessary to force or tell ts that we are sure the variable exists

app.listen(PORT, () => {
   console.log(`⚡ Server running on port ${PORT}`);
});
