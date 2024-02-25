import mongoose from "mongoose";
export default async function connectToDatabase() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env"
      );
    }
    await mongoose.connect(uri);
    console.log('Connected to database')
  } catch (error) {
    console.log(error, "error connecting to database");
  }
}
