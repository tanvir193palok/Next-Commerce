"use client";

import { useWishCount } from "@/app/(home)/hooks/useWishCount";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

const WishClickActions = ({ productId }) => {
  const { setWishCount } = useWishCount();
  const [error, setError] = useState("");
  const [deletedItems, setDeletedItems] = useState(new Set());
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteFromWishlist = useCallback(async () => {
    if (isDeleting || deletedItems.has(productId)) return;

    setError("");
    setIsDeleting(true);

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
    } finally {
      setIsDeleting(false);
    }
  }, [isDeleting, deletedItems, productId, setWishCount, router]);

  return (
    <>
      <button
        onClick={deleteFromWishlist}
        className={`text-gray-600 pr-6 cursor-pointer hover:text-primary ${
          isDeleting || deletedItems.has(productId) ? "cursor-not-allowed" : ""
        }`}
        disabled={isDeleting || deletedItems.has(productId)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </>
  );
};

export default WishClickActions;
