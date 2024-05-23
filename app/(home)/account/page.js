import { auth } from "@/auth";
import Breadcrumb from "@/components/BreadCrumb";
import BillingInfo from "@/components/account/BillingInfo";
import ProfileInfo from "@/components/account/ProfileInfo";
import ShippingInfo from "@/components/account/ShippingInfo";
import { getBillingInfo, getShippingInfo } from "@/database/queries";

const AccountPage = async () => {
  const session = await auth();
  const billingInfo = await getBillingInfo(session?.user?.email);
  const shippingInfo = await getShippingInfo(session?.user?.email);

  return (
    <>
      <Breadcrumb text={"Account"} />
      <div class="container  items-start gap-6 pt-4 pb-16">
        <div class=" grid grid-cols-3 gap-4 mx-auto max-w-5xl">
          <ProfileInfo user={session?.user} />
          <ShippingInfo user={session?.user} info={shippingInfo} />
          <BillingInfo user={session?.user} info={billingInfo} />
        </div>
      </div>
    </>
  );
};

export default AccountPage;
