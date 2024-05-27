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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className="flex gap-3 mt-4">
      <FacebookShareButton url={`${baseUrl}/${productId}`}>
        <div className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <FontAwesomeIcon icon={faFacebookF} size="1x" color="blue" />
        </div>
      </FacebookShareButton>
      <TwitterShareButton url={`${baseUrl}/${productId}`}>
        <div className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <FontAwesomeIcon icon={faTwitter} color="blue" />
        </div>
      </TwitterShareButton>
      <WhatsappShareButton url={`${baseUrl}/${productId}`}>
        <div className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
          <FontAwesomeIcon icon={faWhatsapp} color="green" />
        </div>
      </WhatsappShareButton>
    </div>
  );
};

export default SocialHandlers;
