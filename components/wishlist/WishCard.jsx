import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const WishCard = () => {
  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <Image
          src="/assets/images/products/product6.jpg"
          width={200}
          height={200}
          alt="product 6"
          className="w-full"
        />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          Italian L shape
        </h2>
        <p className="text-gray-500 text-sm">
          Availability: <span className="text-green-600">In Stock</span>
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">$320.00</div>
      <Link
        href="/checkout"
        className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
      >
        add to cart
      </Link>

      <div className="text-gray-600 pr-6 cursor-pointer hover:text-primary">
        <i className="fa-solid fa-trash"></i>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default WishCard;
