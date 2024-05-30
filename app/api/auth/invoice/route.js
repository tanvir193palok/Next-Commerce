import { auth } from "@/auth";
import { deleteProductsInCart, getProductsInCart } from "@/database/queries";
import { invoiceModel } from "@/models/invoice-model";
import { dbConnect } from "@/service/mongo";
import { getTotalPrice } from "@/utils/data-util";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, region, address, city, phone, email } = await request.json();
  const session = await auth();
  const products = await getProductsInCart();
  const totalPrice = getTotalPrice(products);

  await dbConnect();
  const invoice = {
    name,
    region,
    address,
    city,
    phone,
    email,
    products,
    totalPrice,
  };
  try {
    if (email !== session?.user?.email) {
      return new NextResponse("Email does not match with the logged-in user", {
        status: 400,
      });
    } else {
      await invoiceModel.create(invoice);
      await deleteProductsInCart();
      return new NextResponse("Invoice has been created", { status: 201 });
    }
  } catch (err) {
    return NextResponse.json(err.message, { status: 500 });
  }
};
