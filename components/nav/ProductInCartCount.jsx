"use client";

import { useCartProductCount } from "@/app/(home)/hooks/useCartProductCount";

const ProductInCartCount = () => {
  const { productCount } = useCartProductCount();
  return (
    <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
      {productCount}
    </div>
  );
};

export default ProductInCartCount;
