import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";

const Details = ({ product }) => {
  return (
    <div class="container grid grid-cols-2 gap-6">
      <ImageGallery images={product?.gallery} />
      <ProductInfo product={product} />
    </div>
  );
};

export default Details;
