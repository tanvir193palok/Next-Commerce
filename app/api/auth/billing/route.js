import { billingAddressModel } from "@/models/billingAddress-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, billingId, location, mobileNo, email } = await request.json();

  await dbConnect();

  const billingAddress = {
    name,
    billingId,
    location,
    mobileNo,
    email,
  };

  console.log(billingAddress);

  try {
    await billingAddressModel.create(billingAddress);

    return new NextResponse("Billing Address has been updated", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
