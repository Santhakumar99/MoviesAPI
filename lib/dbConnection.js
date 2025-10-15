import mongoose from "mongoose";
const urlStr="mongodb+srv://skuser:resuks@cluster0.bjdag18.mongodb.net/Demo_project?retryWrites=true&w=majority&appName=Cluster0"
// const urlStr = process.env.MONGO_URI || "MONGO_URI_NOT_FOUND";

const connectDB = async () => {
  try {
    await mongoose.connect(urlStr);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
  }
};

export default connectDB
