import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialHandlers = () => {
  return (
    <div className="flex gap-3 mt-4">
      <Link
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faFacebookF} size="1x" color="blue" />
      </Link>
      <Link
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faTwitter} color="blue" />
      </Link>
      <Link
        href="#"
        className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faInstagram} color="red" />
      </Link>
    </div>
  );
};

export default SocialHandlers;
