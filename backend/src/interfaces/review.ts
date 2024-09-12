import { Document, Schema } from "mongoose";

export interface ReviewInterface extends Document {
  review: number;
  content: string;
  owner: Schema.Types.ObjectId;
}
