import { UserInterface } from "interfaces/user";
import { Schema, model } from "mongoose";

const userSchema = new Schema<UserInterface>(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
    },
    username: {
      type: String,
      required: [true, "Please provide your name"],
    },
    provider: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      default: "N/A",
      select: false,
    },
    emailAddress: {
      type: String,
    },
    allowNotifications: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
    },
    location: {
      type: String,
    },
    biography: {
      type: String,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    campgrounds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Campground",
      },
    ],
    favoriteCampsites: [
      {
        campground: {
          type: Schema.Types.ObjectId,
          ref: "Campground",
        },
      },
    ],
    visitedCampsites: [
      {
        campground: {
          type: Schema.Types.ObjectId,
          ref: "Campground",
        },
        lastVisited: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model<UserInterface>("User", userSchema);
export default User;
