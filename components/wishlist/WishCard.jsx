import { getProductById } from "@/database/queries";
import { getDiscountPrice } from "@/utils/data-util";
import Image from "next/image";
import WishClickActions from "./WishClickActions";

const WishCard = async ({ wish }) => {
  const wishData = await getProductById(wish);

  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <Image
          src={wishData?.gallery[0]}
          width={200}
          height={200}
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          {wishData?.name}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability:{" "}
          <span className="text-green-600">
            {wishData?.count > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">
        ${getDiscountPrice(wishData?.price, wishData?.discountPercentage)}
      </div>
      <WishClickActions productId={wish} />
    </div>
  );
};

export default WishCard;
