"use client";

import { useState } from "react";
import { CartContext } from "../contexts";

export default function CartProvider({ children, initialCartProduct }) {
  const [productCount, setProductCount] = useState(initialCartProduct);

  return (
    <CartContext.Provider value={{ productCount, setProductCount }}>
      {children}
    </CartContext.Provider>
  );
}
