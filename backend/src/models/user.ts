import { UserInterface } from "interfaces/user";
import { Schema, model } from "mongoose";

const userSchema = new Schema<UserInterface>({
  name: {
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
  },
  emailAddress: {
    type: String,
    required: [true, "Please provide a valid email address"],
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
});

const User = model<UserInterface>("User", userSchema);
export default User;
