import Link from "next/link";
import SummaryProduct from "./SummaryProduct";
import { getProductsInCart } from "@/database/queries";
import { getTotalPrice } from "@/utils/data-util";

const CheckoutSummary = async () => {
  const products = await getProductsInCart();

  const totalPrice = getTotalPrice(products);
  console.log(totalPrice);

  return (
    <div className="col-span-4 border border-gray-200 p-4 rounded">
      <h4 className="text-gray-800 text-lg mb-4 font-semibold uppercase tracking-widest">
        order summary
      </h4>
      <div className="space-y-2">
        {/* Summary Products */}
        {products.map((product) => (
          <SummaryProduct key={product.productId} product={product} />
        ))}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>subtotal</p>
        <p>${totalPrice}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercas">
        <p>shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between text-gray-800 font-medium py-3 uppercas">
        <p className="font-semibold">Total</p>
        <p>${totalPrice}</p>
      </div>

      <div className="flex items-center mb-4 mt-2">
        <input
          type="checkbox"
          name="aggrement"
          id="aggrement"
          className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label
          for="aggrement"
          className="text-gray-600 ml-3 cursor-pointer text-sm"
        >
          I agree to the{" "}
          <Link href="#" className="text-primary">
            terms & conditions
          </Link>
        </label>
      </div>

      <Link
        href="#"
        className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
      >
        Place order
      </Link>
    </div>
  );
};

export default CheckoutSummary;
