import CategorizedProduct from "@/components/CategorizedProducts";
import Description from "@/components/productDetails/Description";
import Details from "@/components/productDetails/Details";

const ProductDetailsPage = () => {
  return (
    <>
      <Details />
      <Description />
      <CategorizedProduct />
    </>
  );
};

export default ProductDetailsPage;
