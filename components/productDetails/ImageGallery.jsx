"use client";

import Image from "next/image";
import { useState } from "react";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <Image
        src={selectedImage}
        alt="product"
        className="pl-20"
        width={600}
        height={700}
      />
      <div className="grid grid-cols-5 gap-4 mt-4">
        {images.map((image, idx) => (
          <Image
            src={image}
            alt={`product ${idx}`}
            key={idx}
            onClick={() => setSelectedImage(image)}
            className={`w-full cursor-pointer border ${
              image === selectedImage ? "border-primary" : ""
            }`}
            width={80}
            height={80}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
