"use client";

import { useCartProductCount } from "@/app/(home)/hooks/useCartProductCount";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddToCart = ({ productId, wishList, user }) => {
  const [error, setError] = useState("");
  const { setProductCount } = useCartProductCount();
  const router = useRouter();

  const addProductToCart = async () => {
    try {
      const quantity = 1;
      const response = await fetch("/api/auth/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, quantity }),
      });

      if (response.status === 200) {
        setProductCount((prev) => prev + 1);
        router.refresh();
        console.log("Product added to cart");
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (err) {
      console.error("Error adding product to cart:", err);
      setError(err.message);
    }
  };
  return (
    <>
      {error && <div>{error}</div>}
      <button
        onClick={addProductToCart}
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;
