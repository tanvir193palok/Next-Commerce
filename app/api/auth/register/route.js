import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password, confirm } = await request.json();

  await dbConnect();

  if (password === confirm) {
    const hashPassword = await bcrypt.hash(password, 5);

    const newUser = {
      name,
      email,
      password: hashPassword,
    };
    try {
      await userModel.create(newUser);
      return new NextResponse("User has been created", { status: 201 });
    } catch (err) {
      return new NextResponse(err.message, {
        status: 500,
      });
    }
  } else {
    return new NextResponse("Password do not match", {
      status: 400,
    });
  }
};
