import Breadcrumb from "@/components/BreadCrumb";
import Products from "@/components/shop/Products";
import Sidebar from "@/components/shop/Sidebar";
import React from "react";

const ShopPage = () => {
  return (
    <>
      <Breadcrumb text={"Shop"} />
      <div class="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 pb-16 items-start">
        <Sidebar />
        <Products />
      </div>
    </>
  );
};

export default ShopPage;
