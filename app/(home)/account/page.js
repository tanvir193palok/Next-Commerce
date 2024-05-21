import Breadcrumb from "@/components/BreadCrumb";
import BillingInfo from "@/components/account/BillingInfo";
import ProfileInfo from "@/components/account/ProfileInfo";
import ShippingInfo from "@/components/account/ShippingInfo";

const AccountPage = () => {
  return (
    <>
      <Breadcrumb text={"Account"} />
      <div class="container  items-start gap-6 pt-4 pb-16">
        <div class=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <ProfileInfo />
          <ShippingInfo />
          <BillingInfo />
        </div>
      </div>
    </>
  );
};

export default AccountPage;
