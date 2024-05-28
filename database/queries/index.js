import { billingAddressModel } from "@/models/billingAddress-model";
import { productModel } from "@/models/product-model";
import { shippingAddressModel } from "@/models/shippingAddress-model";
import { topNewArrivalProductModel } from "@/models/topNewArrival-model";
import { trendingProductModel } from "@/models/trendingProduct-model";
import { userModel } from "@/models/user-model";

import {
  getUserEmail,
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
    products = products.filter((product) => {
      return product.price > parseInt(min) && product.price < parseInt(max);
    });
  } else if (min) {
    products = products.filter((product) => {
      return product.price > parseInt(min);
    });
  } else if (max) {
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

export async function getTopNewArrivedProducts() {
  const newArrived = await topNewArrivalProductModel.find().lean();

  return replaceMongoIdInArray(newArrived);
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

export async function getBillingInfo(email) {
  const info = billingAddressModel.findOne({ email }).lean();

  return info;
}

export async function getShippingInfo(email) {
  const info = shippingAddressModel.findOne({ email }).lean();

  return info;
}

export async function getWishlist() {
  const email = await getUserEmail();
  const userInfo = await userModel.findOne({ email });

  return userInfo.shippingIds;
}
