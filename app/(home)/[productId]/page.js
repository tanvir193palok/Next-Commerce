import CategorizedProduct from "@/components/CategorizedProducts";
import Breadcrumb from "@/components/BreadCrumb";
import Description from "@/components/productDetails/Description";
import Details from "@/components/productDetails/Details";
import { getProductById, getReleventProducts } from "@/database/queries";

const ProductDetailsPage = async ({ params: { productId } }) => {
  const product = await getProductById(productId);
  const releventProducts = await getReleventProducts(product?.tags, productId);

  return (
    <>
      <Breadcrumb text={"Product"} />
      <Details product={product} />
      <Description description={product?.description} />
      <CategorizedProduct
        products={releventProducts}
        type={"Related Products"}
      />
    </>
  );
};

export default ProductDetailsPage;
