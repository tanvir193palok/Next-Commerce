"use client";

import { useWishCount } from "@/app/(home)/hooks/useWishCount";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProductClickActions = ({ productId, wishList, user }) => {
  const { setWishCount } = useWishCount();
  const router = useRouter();
  const [error, setError] = useState("");
  const [isWished, setIsWished] = useState(wishList.includes(productId));
  const [isAdding, setIsAdding] = useState(false);

  const addToWishlist = async (e) => {
    e.preventDefault();
    setError("");
    setIsAdding(true);

    try {
      const response = await fetch("/api/auth/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (response.status === 200) {
        setWishCount((prev) => prev + 1);
        setIsWished(true);
        setIsAdding(false); // Reset adding state
        router.refresh();
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
      setIsAdding(false);
    }
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    
    if (!user) {
      // Store product ID and redirect to login
      localStorage.setItem("wishlistProductId", productId);
      router.push("/login");
    } else {
      addToWishlist(e);
    }
  };

  return (
    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
      <Link
        href={user ? "/checkout" : "/login"}
        className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
      >
        <FontAwesomeIcon icon={faBagShopping} size="1x" /> Add to cart
      </Link>
      {isWished ? (
        <button
          disabled
          className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 bg-gray-200 cursor-not-allowed"
        >
          <FontAwesomeIcon icon={faHeart} size="1x" /> In Wishlist
        </button>
      ) : (
        <button
          onClick={handleWishlistClick}
          disabled={isAdding}
          className={`border border-gray-300 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 ${
            isAdding
              ? "text-gray-400 bg-gray-200 cursor-not-allowed"
              : "text-gray-600 hover:text-primary transition"
          }`}
        >
          <FontAwesomeIcon icon={faHeart} size="1x" /> Wishlist
        </button>
      )}
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default ProductClickActions;
