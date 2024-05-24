import Breadcrumb from "@/components/BreadCrumb";
import WishCard from "@/components/wishlist/WishCard";

const WishlistPage = () => {
  return (
    <>
      <Breadcrumb text={"Profile"} />
      <div class="container gap-6 pt-4 pb-16">
        <div class="mx-auto space-y-4 max-w-6xl">
          <WishCard />
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
