import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Backend port
export const PORT: number = parseInt(process.env.PORT as string);
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
