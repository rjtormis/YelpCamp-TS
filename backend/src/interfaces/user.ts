import { Schema, Document, Model } from "mongoose";

export interface UserInterface extends Document {
  name: string;
  password: string;
  emailAddress: string;
  allowNotifications: boolean;
  image: string;
  location: string;
  provider: string;
}
