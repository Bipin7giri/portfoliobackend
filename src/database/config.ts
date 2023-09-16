import mongoose from "mongoose";
const dotenv = require("dotenv");
dotenv.config();
const uri:any = process.env.MONGO_DB_URL;
console.log(uri)

export const connectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb+srv://bipin7giri:IRLouttbnPzptFnk@cluster0.2d9ffmd.mongodb.net/protfolio");
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error);
  }
};