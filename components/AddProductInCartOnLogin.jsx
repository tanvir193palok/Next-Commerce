"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCartProductCount } from "@/app/(home)/hooks/useCartProductCount";

const AddProductInCartOnLogin = ({ user }) => {
  const { setProductCount } = useCartProductCount();
  const router = useRouter();

  useEffect(() => {
    const addProductToCart = async (productId, quantity) => {
      try {
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
        } else {
          const errorText = await response.text();
          throw new Error(errorText);
        }
      } catch (err) {
        console.error("Error adding product to cart:", err);
      }
    };

    if (user) {
      const productId = localStorage.getItem("cartListProductId");

      const quantity =
        parseInt(localStorage.getItem("cartProductQuantity"), 10) || 1;

      if (productId) {
        addProductToCart(productId, quantity);
        localStorage.removeItem("cartListProductId");
        localStorage.removeItem("cartProductQuantity");
      }
    }
  }, [user, setProductCount, router]);

  return null;
};

export default AddProductInCartOnLogin;
