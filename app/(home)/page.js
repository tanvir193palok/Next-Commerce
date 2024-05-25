import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import CategorizedProduct from "@/components/CategorizedProducts";
import {
  getTopNewArrivedProducts,
  getTrendingProducts,
} from "@/database/queries";

export default async function Home() {
  const trendingProducts = await getTrendingProducts();
  const topNewArrivedProducts = await getTopNewArrivedProducts();

  console.log(topNewArrivedProducts);

  return (
    <>
      <Banner />
      <Features />
      <Categories />
      <CategorizedProduct
        products={trendingProducts}
        type={"Trending Products"}
      />
      <Ads />
      <CategorizedProduct products={topNewArrivedProducts} />
    </>
  );
}
