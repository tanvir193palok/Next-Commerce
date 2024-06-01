import Breadcrumb from "@/components/BreadCrumb";
import Products from "@/components/shop/Products";
import Sidebar from "@/components/shop/Sidebar";
import { getRefineCategory } from "@/utils/data-util";

const ShopPage = async ({ searchParams: { search, category, min, max } }) => {
  return (
    <>
      <Breadcrumb text={"Shop"} />
      <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <Sidebar />
        <Products
          category={getRefineCategory(category)}
          min={min}
          max={max}
          search={search}
        />
      </div>
    </>
  );
};

export default ShopPage;
