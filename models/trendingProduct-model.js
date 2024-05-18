import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

const trendingProductSchema = new Schema({
  productId: { type: ObjectId, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
  image: { type: String, required: true },
  reviews: { type: Number, required: false },
  rating: { type: Number, required: false },
});

export const trendingProductModel =
  mongoose.models.trending ?? mongoose.model("trending", trendingProductSchema);
