import Link from "next/link";
import SummaryProduct from "./SummaryProduct";
import { getProductsInCart } from "@/database/queries";
import { getTotalPrice } from "@/utils/data-util";

const CheckoutSummary = async () => {
  const products = await getProductsInCart();

  const totalPrice = getTotalPrice(products);

  return (
    <div className="col-span-4 border border-gray-200 p-4 rounded">
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        {/* Summary Products */}
        {products.map((product) => (
          <SummaryProduct key={product.productId} product={product} />
        ))}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>Subtotal</p>
        <p>${totalPrice}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>Shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
