import { getDiscountPrice } from "@/utils/data-util";
import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";
import ClickActions from "./ClickActions";

const ProductCard = ({ product }) => {
  console.log(product);
  const discountPrice = getDiscountPrice(
    product?.price,
    product?.discountPercentage
  );

  return (
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <Image
          src={product?.image}
          width={400}
          height={400}
          alt="product 1"
          className="w-full"
        />
        <ClickActions productId={product?.productId} />
      </div>
      <div className="pt-4 pb-3 px-4">
        <Link href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.name}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">${discountPrice}</p>
          <p className="text-sm text-gray-400 line-through">
            ${product?.price.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center">
          {/* star rating */}
          <div className="flex gap-1 text-sm text-yellow-400">
            {product?.rating && (
              <StarRating rating={Math.ceil(product.rating)} />
            )}
          </div>
          <div className="text-xs text-gray-500 ml-3">({product?.reviews})</div>
        </div>
      </div>
      <Link
        href="#"
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
      >
        Add to cart
      </Link>
    </div>
  );
};

export default ProductCard;
