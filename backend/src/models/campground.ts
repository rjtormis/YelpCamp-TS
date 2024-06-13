import { CampgroundImageInterface, CampgroundInterface } from "interfaces/campground";
import { Schema, model } from "mongoose";

const campgroundImage = new Schema<CampgroundImageInterface>({
  url: String,
  fileName: String,
});

const campgroundSchema = new Schema<CampgroundInterface>({
  name: {
    type: String,
    required: [true, "Please provide a campground name."],
  },
  type: {
    type: String,
    enum: ["public", "private"],
  },
  location: {
    type: String,
    required: [true, "Please provide campground location"],
  },
  images: [campgroundImage],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Campground = model<CampgroundInterface>("Campground", campgroundSchema);
export default Campground;
