import  { env } from './env.js';
import mongoose from 'mongoose';

export async function connectDB() {
    try {
        
        if (!env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }
        
        await mongoose.connect(`${env.MONGO_URI}`, {
            serverSelectionTimeoutMS: 5000
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('connection error with MongoDB:', error);
        process.exit(1);
    }
}