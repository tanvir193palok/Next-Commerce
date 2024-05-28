import { useContext } from "react";
import { WishContext } from "../contexts";

export const useWishCount = () => {
  const { wishCount, setWishCount } = useContext(WishContext);

  return { wishCount, setWishCount };
};
