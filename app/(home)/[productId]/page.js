import CategorizedProduct from "@/components/CategorizedProducts";
import Breadcrumb from "@/components/BreadCrumb";
import Description from "@/components/productDetails/Description";
import Details from "@/components/productDetails/Details";
import { getProductById } from "@/database/queries";

const ProductDetailsPage = async ({ params: { productId } }) => {
  const product = await getProductById(productId);

  console.log(product);
  return (
    <>
      <Breadcrumb text={"Product"} />
      <Details product={product} />
      <Description description={product?.description} />
      <CategorizedProduct />
    </>
  );
};

export default ProductDetailsPage;
