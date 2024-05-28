import Breadcrumb from "@/components/BreadCrumb";
import WishCard from "@/components/wishlist/WishCard";
import { getWishlist } from "@/database/queries";

const WishlistPage = async () => {
  const wishes = await getWishlist();
  return (
    <>
      <Breadcrumb text={"Profile"} />
      <div class="container gap-6 pt-4 pb-16">
        {wishes.length === 0 && <p className="flex pt-28 justify-center text-xl font-semibold">No product added to wishlist.</p>}
        <div class="mx-auto space-y-4 max-w-6xl">
          {wishes.map((wish) => (
            <WishCard key={wish} wish={wish} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
