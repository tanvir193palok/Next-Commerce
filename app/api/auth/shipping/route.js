import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";
import { shippingAddressModel } from "@/models/shippingAddress-model";

export const POST = async (request) => {
  const { name, shippingId, location, mobileNo, email } = await request.json();

  await dbConnect();

  const shippingAddress = {
    name,
    shippingId,
    location,
    mobileNo,
    email,
  };

  try {
    // Find an existing billing address by email and update it if it exists, otherwise create a new one
    const updatedShippingAddress = await shippingAddressModel.findOneAndUpdate(
      { email },
      shippingAddress,
      {
        new: true, // Return the updated document
        upsert: true, // Create a new document if it doesn't exist
        runValidators: true, // Validate the update operation
      }
    );

    return new NextResponse("Shipping Address has been updated successfully", {
      status: 201,
    });
  } catch (err) {
    console.error("Error updating bshipping address:", err);
    return new NextResponse(err.message, { status: 500 });
  }
};
