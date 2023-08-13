import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI!)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(e => console.log(e));