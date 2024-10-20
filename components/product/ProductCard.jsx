import { getDiscountPrice } from "@/utils/data-util";
import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";
import ClickActions from "./ClickActions";
import { getWishlist, getproductCountById } from "@/database/queries";
import { auth } from "@/auth";
import AddToCart from "./AddToCart";

const ProductCard = async ({ product }) => {
  const session = await auth();
  const wishes = await getWishlist();

  const discountPrice = getDiscountPrice(
    product?.price,
    product?.discountPercentage
  );

  //For handling count of trending and to new arrived product
  let count = 0;
  if (product?.productId) {
    count = await getproductCountById(product?.productId);
  }

  return (
    <div className="bg-white shadow rounded overflow-hidden group mb-4 md:mb-0">
      <div className="relative">
        <div className="w-full h-64 overflow-hidden">
          <Image
            src={product?.image || product?.gallery[0]}
            width={400}
            height={400}
            alt={product?.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* wishlist and add to cart actions */}
        <ClickActions
          productId={product?.productId || product?.id}
          wishList={wishes}
          user={session?.user}
        />
      </div>
      <div className="pt-4 pb-3 px-4">
        <Link href={`/${product?.productId || product?.id}`}>
          <h4 className="uppercase h-10 md:h-14 font-medium text-base md:text-xl mb-2 text-gray-800 hover:text-primary transition">
            {product?.name}
          </h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="md:text-xl text-primary md:font-semibold tracking-wide md:tracking-wider">${discountPrice}</p>
          <p className="text-sm text-gray-400 line-through tracking-wide md:tracking-wider">
            ${product?.price}
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
      <AddToCart
        productId={product?.productId || product?.id}
        wishList={wishes}
        user={session?.user}
        productCount={product?.count || count}
      />
    </div>
  );
};

export default ProductCard;
