"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const WishClickActions = ({ productId }) => {
  const [error, setError] = useState("");
  const router = useRouter();

  const deleteFromWishlist = async (productId) => {
    try {
      const response = await fetch("/api/auth/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      response.status === 200 && router.refresh();
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
        className="text-gray-600 pr-6 cursor-pointer hover:text-primary"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </>
  );
};

export default WishClickActions;
