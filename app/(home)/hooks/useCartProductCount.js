import { useContext } from "react";
import { CartContext } from "../contexts";

export const useCartProductCount = () => {
  const { productCount, setProductCount } = useContext(CartContext);

  return { productCount, setProductCount };
};
