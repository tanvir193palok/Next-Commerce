import { getProductById, updateProductQuantity } from "@/database/queries";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { getDiscountPrice, getUserEmail } from "@/utils/data-util";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { productId, quantity } = await request.json();
  await dbConnect();
  const product = await getProductById(productId);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  if (product.count < quantity) {
    return NextResponse.json(
      { message: "Insufficient product quantity" },
      { status: 400 }
    );
  }

  const price = getDiscountPrice(product.price, product.discountPercentage);
  const name = product.name;
  const email = await getUserEmail();

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const productIndex = user.productsInCart.findIndex(
      (item) => item.productId === productId
    );

    if (productIndex > -1) {
      user.productsInCart[productIndex].quantity += quantity;
      user.productsInCart[productIndex].price = price;
    } else {
      user.productsInCart.push({
        name,
        productId,
        quantity,
        price,
      });
    }

    await user.save();

    // Decrease the product quantity in the inventory
    product.count -= quantity;
    await updateProductQuantity(productId, product.count);

    return NextResponse.json(
      { message: "Product added to cart and inventory updated" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
