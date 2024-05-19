import Link from "next/link";

const ProductClickActions = () => {
  return (
    <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
      <Link
        href="#"
        className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
      >
        <i className="fa-solid fa-bag-shopping"></i> Add to cart
      </Link>
      <Link
        href="#"
        className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
      >
        <i className="fa-solid fa-heart"></i> Wishlist
      </Link>
    </div>
  );
};

export default ProductClickActions;
