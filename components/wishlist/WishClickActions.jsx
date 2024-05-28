"use client";

import { useWishCount } from "@/app/(home)/hooks/useWishCount";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const WishClickActions = ({ productId }) => {
  const { setWishCount } = useWishCount();
  const [error, setError] = useState("");
  const [deletedItems, setDeletedItems] = useState(new Set());
  const router = useRouter();

  const deleteFromWishlist = async (productId) => {
    if (deletedItems.has(productId)) return; // Prevent multiple calls

    setError("");

    try {
      const response = await fetch("/api/auth/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (response.status === 200) {
        setWishCount((prev) => prev - 1);
        setDeletedItems((prev) => new Set(prev).add(productId));
        router.refresh();
      } else {
        const errorText = await response.text();
        throw new Error(errorText);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <>
      <Link
        href="/checkout"
        className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
      >
        add to cart
      </Link>
      <button
        onClick={() => deleteFromWishlist(productId)}
        className={`text-gray-600 pr-6 cursor-pointer hover:text-primary ${
          deletedItems.has(productId) ? "cursor-not-allowed" : ""
        }`}
        disabled={deletedItems.has(productId)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </>
  );
};

export default WishClickActions;
