"use client";

import Link from "next/link";
import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useWishCount } from "@/app/(home)/hooks/useWishCount";
import { useRouter } from "next/navigation";

const ClickActions = ({ productId, wishList, user }) => {
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
    <>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <div
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
      justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
      >
        <Link
          href={`/${productId}`}
          className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
          title="view product"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
        </Link>
        {isWished ? (
          <button
            disabled
            className="text-white text-lg w-9 h-8 rounded-full bg-gray-500 flex items-center justify-center cursor-not-allowed"
            title="already in wishlist"
          >
            <FontAwesomeIcon icon={faHeart} size="1x" />
          </button>
        ) : (
          <button
            onClick={handleWishlistClick}
            disabled={isAdding}
            className={`text-white text-lg w-9 h-8 rounded-full ${
              isAdding
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-primary hover:bg-gray-800"
            } flex items-center justify-center transition`}
            title="add to wishlist"
          >
            <FontAwesomeIcon icon={faHeart} size="1x" />
          </button>
        )}
      </div>
    </>
  );
};

export default ClickActions;
