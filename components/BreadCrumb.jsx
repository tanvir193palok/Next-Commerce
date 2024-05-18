import { faHouse, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Breadcrumb = ({ text }) => {
  return (
    <div className="container py-4 flex items-center gap-3">
      <Link href="/" legacyBehavior>
        <a className="text-primary text-base">
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </Link>
      <span className="text-sm text-gray-400">
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      <p className="text-gray-600 font-medium">{text}</p>
    </div>
  );
};

export default Breadcrumb;
