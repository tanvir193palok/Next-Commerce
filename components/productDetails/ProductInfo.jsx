import StarRating from "../product/StarRating";
import { getDiscountPrice } from "@/utils/data-util";
import SocialHandlers from "./SocialHandlers";
import { getWishlist } from "@/database/queries";
import { auth } from "@/auth";
import ProductClickActions from "./ProductClickActions";

const ProductInfo = async ({ product }) => {
  const session = await auth();
  let wishes = [];
  if (session?.user) {
    wishes = await getWishlist();
  }

  return (
    <div>
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium uppercase mb-2">{product?.name}</h2>
      <div className="flex items-center mb-2 lg:mb-4">
        {/* Star rating */}
        <div className="flex gap-1 text-sm text-yellow-400">
          <StarRating rating={product.rating} />
        </div>
        <div className="text-xs text-gray-500 ml-3">
          ({product?.reviews} Reviews)
        </div>
      </div>
      <div className="space-y-2 text-sm lg:text-base">
        <p className="text-gray-800 font-semibold space-x-2">
          <span>Availability: </span>
          <span className="text-green-600">
            {product?.count > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </p>
        <p className="space-x-2 text-sm lg:text-base">
          <span className="text-gray-800 font-semibold">Brand: </span>
          <span className="text-gray-600">{product?.brand}</span>
        </p>
        <p className="space-x-2  text-sm lg:text-base">
          <span className="text-gray-800 font-semibold">Category: </span>
          <span className="text-gray-600">{product?.category}</span>
        </p>
        <p className="space-x-2  text-sm lg:text-base">
          <span className="text-gray-800 font-semibold">SKU: </span>
          <span className="text-gray-600">{product?.sku}</span>
        </p>
      </div>
      <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-2 lg:mt-4">
        <p className="text-base lg:text-xl text-primary font-semibold">
          ${getDiscountPrice(product?.price, product?.discountPercentage)}
        </p>
        <p className="text-base text-gray-400 line-through">
          ${product?.price}
        </p>
      </div>

      <p className="mt-2 lg:mt-4 text-sm lg:text-base text-gray-600">{product?.shortDescription}</p>

      {/* Handling add to wishlist and cart */}

      <ProductClickActions
        productId={product?.productId || product?.id}
        wishList={wishes}
        user={session?.user}
        productCount={product?.count}
      />

      {/* Handling social share*/}
      <SocialHandlers productId={product.id} />
    </div>
  );
};

export default ProductInfo;
