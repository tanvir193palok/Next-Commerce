import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StarRating = ({ rating }) => {
  return (
    <>
      {Array.from({ length: rating }, (_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-yellow-300 text-xs md:text-lg"
        />
      ))}
    </>
  );
};

export default StarRating;
