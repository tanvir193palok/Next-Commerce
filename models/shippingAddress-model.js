
import mongoose, { Schema } from "mongoose";

const shippingAddressSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  shippingId: {
    required: true,
    type: String,
  },
  location: {
    required: false,
    type: String,
  },
  mobileNo: {
    required: false,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
});

export const shippingAddressModel =
  mongoose.models.shippingAddress ??
  mongoose.model("shippingAddress", shippingAddressSchema);
