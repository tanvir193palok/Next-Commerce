"use client";

import { useState } from "react";
import { WishContext } from "../contexts";

export default function WishProvider({ children, initialWishCount }) {
  const [wishCount, setWishCount] = useState(initialWishCount);


  return (
    <WishContext.Provider value={{ wishCount, setWishCount }}>
      {children}
    </WishContext.Provider>
  );
}
