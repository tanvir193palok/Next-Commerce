import { productModel } from "@/models/product-model";
import { trendingProductModel } from "@/models/trendingProduct-model";

import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

export async function getAllProducts() {
  const products = await productModel.find().lean();

  return replaceMongoIdInArray(products);
}

export async function getTrendingProducts() {
  const trending = await trendingProductModel.find().lean();

  return replaceMongoIdInArray(trending);
}

export async function getProductById(productId) {
  const product = await productModel.findById(productId).lean();

  return replaceMongoIdInObject(product);
}
