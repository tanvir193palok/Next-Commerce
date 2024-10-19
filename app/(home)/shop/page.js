import Breadcrumb from "@/components/BreadCrumb";
import Products from "@/components/shop/Products";
import Sidebar from "@/components/shop/Sidebar";
import { getRefineCategory } from "@/utils/data-util";

const ShopPage = async ({ searchParams: { search, category, min, max } }) => {
  return (
    <>
      <Breadcrumb text={"Shop"} />
      <div className="container grid md:grid-cols-4 grid-cols-1 gap-6 md:pt-2 xl:pt-4 pb-8 lg:pb-16 items-start">
        <div className="order-1 md:order-none">
          <Sidebar />
        </div>

        <div className="order-2 md:order-none md:col-span-3">
          <Products
            category={getRefineCategory(category)}
            min={min}
            max={max}
            search={search}
          />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
