"use server";

import { signIn } from "@/auth";

export async function doSignIn(provider) {
  await signIn(provider, { callbackUrl: "http://localhost:3000" });
}
