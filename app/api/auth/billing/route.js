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

  try {
    // Find an existing billing address by email and update it if it exists, otherwise create a new one
    const updatedBillingAddress = await billingAddressModel.findOneAndUpdate(
      { email },
      billingAddress,
      {
        new: true, // Return the updated document
        upsert: true, // Create a new document if it doesn't exist
        runValidators: true, // Validate the update operation
      }
    );

    return new NextResponse(
      "Billing Address has been updated successfully",
      { status: 201 }
    );
  } catch (err) {
    console.error("Error updating billing address:", err);
    return new NextResponse(err.message, { status: 500 });
  }
};
