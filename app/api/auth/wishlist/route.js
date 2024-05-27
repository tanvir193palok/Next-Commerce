import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";
import { userModel } from "@/models/user-model";

export const POST = async (request) => {
  try {
    const { email, productId } = await request.json();
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
