import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  image: {
    required: false,
    type: String,
  },
  mobileNo: {
    required: false,
    type: String,
  },
  shippingIds: {
    required: false,
    type: [String],
    default: [],
  },
});

export const userModel =
  mongoose.models.users ?? mongoose.model("users", userSchema);
