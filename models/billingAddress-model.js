// billingAddress-model.js
import mongoose, { Schema } from "mongoose";

const billingAddressSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  billingId: {
    required: true,
    type: String,
  },
  location: {
    type: String,
  },
  mobileNo: {
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
});

export const billingAddressModel =
  mongoose.models.billingAddress ||
  mongoose.model("billingAddress", billingAddressSchema);
