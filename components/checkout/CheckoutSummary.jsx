import SummaryProduct from "./SummaryProduct";
import { getProductsInCart } from "@/database/queries";
import { getTotalPrice } from "@/utils/data-util";

const CheckoutSummary = async () => {
  const products = await getProductsInCart();
  let totalPrice = 0;
  if (products.length > 0) {
    totalPrice = getTotalPrice(products);
  }

  return (
    <div className="col-span-8 lg:col-span-4 border border-gray-200 p-4 rounded">
      <h4 className="text-gray-800 text-base lg:text-lg mb-2 lg:mb-4 font-medium uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        {/* Summary Products */}
        {products.length > 0 ? (
          products.map((product) => (
            <SummaryProduct key={product.productId} product={product} />
          ))
        ) : (
          <p className="flex text-sm lg:text-base justify-center text-gray-600 py-6">
            Your cart is currently empty.
          </p>
        )}
      </div>

      <div className="flex justify-between text-sm lg:text-base border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
        <p>Subtotal</p>
        <p>${totalPrice}</p>
      </div>

      <div className="flex justify-between text-sm lg:text-base border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
        <p>Shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between text-sm lg:text-base text-gray-800 font-medium py-3 uppercase">
        <p className="font-semibold">Total</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
