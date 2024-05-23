import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";
import { shippingAddressModel } from "@/models/shippingAddress-model";

export const POST = async (request) => {
  const { userId, name, shippingId, location, mobileNo } = await request.json();

  await dbConnect();

  const shippingAddress = {
    userId,
    name,
    shippingId,
    location,
    mobileNo,
  };

  try {
    await shippingAddressModel.create(shippingAddress);

    return new NextResponse("Shipping Address has been updated", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
