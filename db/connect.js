import mongoose from "mongoose";

export const connectDB = (uri) => {
  // console.log("Connecting to database...");
  return mongoose.connect(uri);
};
