import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Backend port
export const PORT: number = parseInt(process.env.PORT as string);
export const DATABASE: string = process.env.DATABASE as string;
export const FACEBOOK_APP_SECRET: string = process.env.FACEBOOK_APP_SECRET as string;
export const FACEBOOK_APP_ID: string = process.env.FACEBOOK_APP_ID as string;
export const YELPCAMP_APP_SECRET_KEY: string = process.env.YELPCAMP_APP_SECRET_KEY as string;

const app = express();

/**
 * A custom error handler.
 */
export class CustomError extends Error {
  status: number;
  field?: string;
  constructor(message: string, status: number, field?: string) {
    super();
    this.field = field || "";
    this.status = status;
    this.message = message;
  }
}

export default app;
