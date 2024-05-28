import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";
import { userModel } from "@/models/user-model";
import { getUserEmail } from "@/utils/data-util";

export const POST = async (request) => {
  const email = await getUserEmail();
  try {
    const { productId } = await request.json();
    await dbConnect();

    const user = await userModel.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (!user.shippingIds.includes(productId)) {
      await userModel.updateOne(
        { email },
        { $push: { shippingIds: productId } }
      );
    } else {
      return NextResponse.json(
        { message: "Product already in wishlist" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Product added to wishlist" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};

export const DELETE = async (request) => {
  const email = await getUserEmail();
  try {
    const { productId } = await request.json();
    await dbConnect();

    const user = await userModel.findOneAndUpdate(
      { email },
      { $pull: { shippingIds: productId } }
    );

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Product removed from wishlist" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
