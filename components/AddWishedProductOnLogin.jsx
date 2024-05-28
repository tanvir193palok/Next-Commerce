"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useWishCount } from "@/app/(home)/hooks/useWishCount";

const AddWishedProductOnLogin = ({ user }) => {
  const { setWishCount } = useWishCount();
  const router = useRouter();

  useEffect(() => {
    const addProductToWishlist = async (productId) => {
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
          router.refresh();
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (user) {
      const productId = localStorage.getItem("wishlistProductId");
      if (productId) {
        addProductToWishlist(productId);
        localStorage.removeItem("wishlistProductId");
      }
    }
  }, [user, setWishCount, router]);

  return null;
};

export default AddWishedProductOnLogin;
