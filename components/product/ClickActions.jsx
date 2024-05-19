import Link from "next/link";
import { faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClickActions = ({ productId }) => {
  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
  justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
    >
      <Link
        href={`/${productId}`}
        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
        title="view product"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
      </Link>
      <Link
        href="#"
        className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
        title="add to wishlist"
      >
        <FontAwesomeIcon icon={faHeart} size="1x" />
      </Link>
    </div>
  );
};

export default ClickActions;
