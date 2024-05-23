import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const shippingAddressSchema = new Schema({
  userId: {
    required: true,
    type: ObjectId,
  },
  name: {
    required: true,
    type: String,
  },
  shippingId: {
    required: true,
    type: Number,
  },
  location: {
    required: false,
    type: String,
  },
  mobileNo: {
    required: false,
    type: String,
  },
});

export const shippingAddressModel =
  mongoose.models.shippingAddress ??
  mongoose.model("shippingAddress", shippingAddressSchema);
