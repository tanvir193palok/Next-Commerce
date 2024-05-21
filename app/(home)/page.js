import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import Navbar from "@/components/nav/Navbar";
import CategorizedProduct from "@/components/CategorizedProducts";
import { getTrendingProducts } from "@/database/queries";
import { auth } from "@/auth";

export default async function Home() {
  const trendingProducts = await getTrendingProducts();
  const session = await auth();
  console.log(session);
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Categories />
      <CategorizedProduct
        products={trendingProducts}
        type={"Trending Products"}
      />
      <Ads />
      <CategorizedProduct />
    </>
  );
}
