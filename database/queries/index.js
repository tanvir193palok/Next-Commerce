import { billingAddressModel } from "@/models/billingAddress-model";
import { invoiceModel } from "@/models/invoice-model";
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

export async function getAllProducts(category, min, max, search) {
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

  if (search) {
    const searchRegex = new RegExp(search, "i");

    products = products.filter((product) => {
      return (
        searchRegex.test(product.name) ||
        searchRegex.test(product.brand) ||
        searchRegex.test(product.category) ||
        product.tags.some((tag) => searchRegex.test(tag))
      );
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

export async function getproductCountById(productId) {
  const product = await productModel.findById(productId).lean();

  return product.count;
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

export const updateProductQuantity = async (productId, count) => {
  await productModel.findByIdAndUpdate(productId, { count });
};

export async function getWishlist() {
  const email = await getUserEmail();
  const userInfo = await userModel.findOne({ email });

  if (userInfo) {
    return userInfo.shippingIds;
  }
  return [];
}

export async function getProductsInCart() {
  const email = await getUserEmail();
  const userInfo = await userModel.findOne({ email });

  if (userInfo) {
    return userInfo.productsInCart;
  }
  return [];
}

export async function deleteProductsInCart() {
  const email = await getUserEmail();
  const userInfo = await userModel.findOne({ email });

  if (userInfo) {
    userInfo.productsInCart = [];
    await userInfo.save();
  }
}

export async function getInvoiceByEmail() {
  const email = await getUserEmail();
  const invoice = await invoiceModel.findOne({ email });

  return invoice;
}

export async function deleteInvoiceByEmail() {
  const email = await getUserEmail();
  const invoice = await invoiceModel.findOne({ email });

  if (invoice) {
    await invoiceModel.deleteOne({ email });
  }
}
