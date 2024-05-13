import { Schema, Document, Model } from "mongoose";

export interface CampgroundImageInterface {
  url: string;
  fileName: string;
}
export interface CampgroundInterface extends Document {
  name: string;
  type: string;
  location: string;
  images: CampgroundImageInterface[];
  owner: Schema.Types.ObjectId;
}
