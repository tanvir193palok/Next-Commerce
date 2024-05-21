"use server";

import { signIn } from "@/auth";

// export async function doSignIn(provider) {
//   await signIn(provider, { callbackUrl: "http://localhost:3000" });
// }

export async function login(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
}
