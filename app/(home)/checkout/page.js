import Breadcrumb from "@/components/BreadCrumb";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";

const CheckoutPage = () => {
  return (
    <>
      <Breadcrumb text={"Checkout"} />
      <div class="container grid lg:grid-cols-12 items-start pb-8 lg:pb-16 pt-4 gap-6">
        <CheckoutForm />
        <CheckoutSummary />
      </div>
    </>
  );
};

export default CheckoutPage;
