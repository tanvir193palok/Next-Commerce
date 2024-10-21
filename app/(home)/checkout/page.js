import Breadcrumb from "@/components/BreadCrumb";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";

const CheckoutPage = () => {
  return (
    <>
      <Breadcrumb text={"Checkout"} />
      <div className="container flex flex-col lg:grid lg:grid-cols-12 items-start pb-8 lg:pb-16 pt-2 lg:pt-4 gap-6">
        <div className="w-full lg:col-span-4 order-1 lg:order-2">
          <CheckoutSummary />
        </div>
        <div className="w-full lg:col-span-8 order-2 lg:order-1">
          <CheckoutForm />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
