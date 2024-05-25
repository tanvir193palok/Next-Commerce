"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "next-share";

const SocialHandlers = ({ productId }) => {
  return (
    <div className="flex gap-3 mt-4">
      <div className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
        <FacebookShareButton url={`http://localhost:3000/${productId}`}>
          <FontAwesomeIcon icon={faFacebookF} size="1x" color="blue" />
        </FacebookShareButton>
      </div>
      <div className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
        <TwitterShareButton url={`http://localhost:3000/${productId}`}>
          <FontAwesomeIcon icon={faTwitter} color="blue" />
        </TwitterShareButton>
      </div>
      <div className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
        <WhatsappShareButton url={`http://localhost:3000/${productId}`}>
          <FontAwesomeIcon icon={faWhatsapp} color="green" />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SocialHandlers;
