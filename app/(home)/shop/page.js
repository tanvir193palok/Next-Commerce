import Breadcrumb from "@/components/BreadCrumb";
import Products from "@/components/shop/Products";
import Sidebar from "@/components/shop/Sidebar";
import { getAllProducts } from "@/database/queries";

const ShopPage = async () => {
  const products = await getAllProducts();
  console.log(products);

  return (
    <>
      <Breadcrumb text={"Shop"} />
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <Sidebar />
        <Products products={products} />
      </div>
    </>
  );
};

export default ShopPage;
