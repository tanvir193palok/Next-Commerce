import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  shortDescription: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  count: { type: Number, required: true },
  sku: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
  gallery: { type: Array, required: false },
  reviews: { type: Number, required: false },
  rating: { type: Number, required: false },
  tags: { type: Array, required: true },
});

export const productModel =
  mongoose.models.product ?? mongoose.model("product", productSchema);
