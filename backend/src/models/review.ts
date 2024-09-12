import { ReviewInterface } from "interfaces/review";
import { model, Schema } from "mongoose";

const reviewSchema = new Schema<ReviewInterface>({
  review: {
    type: Number,
    required: [true, "Please rate the campground"],
  },
  content: {
    type: String,
    required: [true, "Please provide a review."],
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Review = model<ReviewInterface>("Review", reviewSchema);
export default Review;
