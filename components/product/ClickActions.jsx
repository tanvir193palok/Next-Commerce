"use client";

import Link from "next/link";
import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useWishCount } from "@/app/(home)/hooks/useWishCount";

const ClickActions = ({ productId }) => {
  const { setWishCount } = useWishCount();
  const [error, setError] = useState("");

  const addToWishlist = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/auth/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      if (response.status === 200) {
        setWishCount((prev) => prev + 1);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
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
      <button
        onClick={addToWishlist}
        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
        title="add to wishlist"
      >
        <FontAwesomeIcon icon={faHeart} size="1x" />
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default ClickActions;
