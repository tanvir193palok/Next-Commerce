"use client";

import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import WishAction from "./WishAction";
import { useCartProductCount } from "@/app/(home)/hooks/useCartProductCount";
import { useRouter } from "next/navigation";

const ProductClickActions = ({ productId, wishList, user }) => {
  const [quantity, setQuantity] = useState(1);
  const { setProductCount } = useCartProductCount();
  const router = useRouter();

  //Quantity updater function with atleast quantity to be 1
  const updateQuantity = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const addProductToCart = async () => {
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
        console.log("Product added to cart");
        setQuantity(1);
        router.refresh();
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  return (
    <>
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div
            onClick={() => updateQuantity(-1)}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            {quantity}
          </div>
          <div
            onClick={() => updateQuantity(1)}
            className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            +
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
        <button
          onClick={addProductToCart}
          className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
        >
          <FontAwesomeIcon icon={faBagShopping} size="1x" /> add to cart
        </button>

        <WishAction productId={productId} wishList={wishList} user={user} />
      </div>
    </>
  );
};

export default ProductClickActions;
