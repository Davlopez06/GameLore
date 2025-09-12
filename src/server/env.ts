import * as dotenv from "dotenv";
dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI!;
export const MONGODB_DB = process.env.MONGODB_DB!;