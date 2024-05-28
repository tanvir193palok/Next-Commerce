"use client";

import { useWishCount } from "@/app/(home)/hooks/useWishCount";

const WishCount = () => {
  const { wishCount } = useWishCount();

  console.log(wishCount);

  return (
    <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
      {wishCount}
    </div>
  );
};

export default WishCount;
