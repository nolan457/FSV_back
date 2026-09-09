import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT: process.env.APP_PORT || 3000,
    MONGO_URI: process.env.MONGODB_URI
}