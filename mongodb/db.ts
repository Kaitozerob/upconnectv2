import dotenv from 'dotenv';
import mongoose, { Connection } from "mongoose";

dotenv.config();

let isConnected: Connection | boolean = false;

const connectDB = async () => {
    if (isConnected) {
        console.log("Mongodb already connected");
        return isConnected;
    }
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("Mongo URI is not defined in environment variables");
        }

        const res = await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as mongoose.ConnectOptions);
        isConnected = res.connection;
        console.log("Mongodb connected.");
        return isConnected;
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        throw error;
    }
};

export default connectDB;
