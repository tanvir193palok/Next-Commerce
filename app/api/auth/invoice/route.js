import { auth } from "@/auth";
import {
  deleteInvoiceByEmail,
  deleteProductsInCart,
  getInvoiceByEmail,
  getProductsInCart,
} from "@/database/queries";
import { invoiceModel } from "@/models/invoice-model";
import { dbConnect } from "@/service/mongo";
import { getTotalPrice } from "@/utils/data-util";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  await dbConnect();
  await deleteInvoiceByEmail();
  
  const { name, region, address, city, phone, email } = await request.json();
  const session = await auth();
  const products = await getProductsInCart();
  const totalPrice = getTotalPrice(products);
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

export const GET = async () => {
  try {
    const invoice = await getInvoiceByEmail();
    return new Response(JSON.stringify({ invoice }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
