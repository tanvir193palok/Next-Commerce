"use client";

import { useCartProductCount } from "@/app/(home)/hooks/useCartProductCount";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddToCart = ({ productId, user, productCount }) => {
  const [error, setError] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);
  const { setProductCount } = useCartProductCount();
  const router = useRouter();

  const addProductToCart = async (e) => {
    e.preventDefault();

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
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 400); 
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (err) {
      console.error("Error adding product to cart:", err);
      setError(err.message);
    }
  };

  const handleToAddCart = (e) => {
    e.preventDefault();

    if (!user) {
      localStorage.setItem("cartListProductId", productId);
      router.push("/login");
    } else {
      addProductToCart(e);
    }
  };

  return (
    <>
      {error && <div>{error}</div>}
      <button
        onClick={handleToAddCart}
        className={`block w-full py-2 text-center text-white border rounded-b hover:bg-transparent hover:text-primary transition ${
          productCount === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-primary border-primary"
        }`}
        disabled={productCount === 0}
      >
        <span className="pr-2">
          <FontAwesomeIcon icon={faBagShopping} />
        </span>
        {productCount === 0
          ? "Out Of Stock"
          : addedToCart
          ? "Added to cart"
          : "Add to cart"}
      </button>
    </>
  );
};

export default AddToCart;
