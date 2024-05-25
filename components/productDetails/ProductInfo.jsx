import StarRating from "../product/StarRating";
import { getDiscountPrice } from "@/utils/data-util";
import SocialHandlers from "./SocialHandlers";
import ProductClickActions from "./ProductClickActions";

const ProductInfo = ({ product }) => {
  return (
    <div>
      <h2 className="text-3xl font-medium uppercase mb-2">{product?.name}</h2>
      <div className="flex items-center mb-4">
        {/* Star rating */}
        <div className="flex gap-1 text-sm text-yellow-400">
          <StarRating rating={product.rating} />
        </div>
        <div className="text-xs text-gray-500 ml-3">
          ({product?.reviews} Reviews)
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-800 font-semibold space-x-2">
          <span>Availability: </span>
          <span className="text-green-600">
            {product?.count > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Brand: </span>
          <span className="text-gray-600">{product?.brand}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Category: </span>
          <span className="text-gray-600">{product?.category}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">SKU: </span>
          <span className="text-gray-600">{product?.sku}</span>
        </p>
      </div>
      <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
        <p className="text-xl text-primary font-semibold">
          ${getDiscountPrice(product?.price, product?.discountPercentage)}
        </p>
        <p className="text-base text-gray-400 line-through">
          ${product?.price}
        </p>
      </div>

      <p className="mt-4 text-gray-600">{product?.shortDescription}</p>

      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            4
          </div>
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
            +
          </div>
        </div>
      </div>

      <ProductClickActions />
      <SocialHandlers productId={product.id} />
    </div>
  );
};

export default ProductInfo;
