import { Schema, Document, Types } from "mongoose";

interface VisitedCampsite {
  campground: Schema.Types.ObjectId;
  lastVisited: Date;
}

export interface UserInterface extends Document {
  name: string;
  password: string;
  emailAddress: string;
  allowNotifications: boolean;
  image: string;
  location: string;
  provider: string;
  username: string;
  biography: string;
  campgrounds: Types.ObjectId[];
  reviews: Types.ObjectId[];
  visitedCampsites: VisitedCampsite[];
  favoriteCampsites: Types.ObjectId[];
}
