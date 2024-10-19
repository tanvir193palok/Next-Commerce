"use client";

import { useWishCount } from "@/app/(home)/hooks/useWishCount";

const WishCount = () => {
  const { wishCount } = useWishCount();

  return (
    <div className="absolute -right-3 md:right-0 -top-2 md:-top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
      {wishCount}
    </div>
  );
};

export default WishCount;
