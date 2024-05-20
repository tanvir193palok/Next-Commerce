import { productModel } from "@/models/product-model";
import { trendingProductModel } from "@/models/trendingProduct-model";

import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

export async function getAllProducts(category, min, max) {
  let products = await productModel.find().lean();

  if (category) {
    const categoriesToMatch = category.split("|");

    products = products.filter((product) => {
      return categoriesToMatch.includes(product?.category);
    });
  }

  if (min && max) {
    console.log(true);
    products = products.filter((product) => {
      return product.price > parseInt(min) && product.price < parseInt(max);
    });
  } else if (min) {
    console.log(true);
    products = products.filter((product) => {
      return product.price > parseInt(min);
    });
  } else if (max) {
    console.log(true);
    products = products.filter((product) => {
      return product.price < parseInt(max);
    });
  }

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

export async function getReleventProducts(tags, excludeProductId) {
  const products = await productModel
    .find({
      tags: { $in: tags },
      _id: { $ne: excludeProductId },
    })
    .lean();

  return replaceMongoIdInArray(products);
}
