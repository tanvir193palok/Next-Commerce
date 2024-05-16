import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";

const Details = () => {
  return (
    <div class="container grid grid-cols-2 gap-6">
      <ImageGallery />
      <ProductInfo />
    </div>
  );
};

export default Details;
