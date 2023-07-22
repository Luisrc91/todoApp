import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(cookieParser());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("mongodb connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
// LISTEN
app.listen(process.env.PORT, () => {
    connectDB();
  console.log(`TODO LIST PORT: ${process.env.PORT}`);
});
