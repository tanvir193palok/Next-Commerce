import CategorizedProduct from "@/components/CategorizedProducts";
import Breadcrumb from "@/components/BreadCrumb";
import Description from "@/components/productDetails/Description";
import Details from "@/components/productDetails/Details";

const ProductDetailsPage = () => {
  return (
    <>
      <Breadcrumb text={"Product"} />
      <Details />
      <Description />
      <CategorizedProduct />
    </>
  );
};

export default ProductDetailsPage;
