// lib/mongodb.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

async function dbConnect() {
  try {
    // Check if there's an existing connection
    if (mongoose.connection.readyState === 1) {
      console.log("Using existing Mongoose connection");
      return mongoose.connection; // Return the existing connection
    }

    console.log("Creating a new Mongoose connection");
    await mongoose.connect(MONGODB_URI!); // Let Mongoose handle connection pooling
    console.log("Mongoose connection established");
    return mongoose.connection;
  } catch (error) {
    console.error("Mongoose connection error:", error);
    throw error;
  }
}

export default dbConnect;
