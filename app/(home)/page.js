import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import Navbar from "@/components/nav/Navbar";
import CategorizedProduct from "@/components/CategorizedProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Categories />
      <CategorizedProduct />
      <Ads />
      <CategorizedProduct />
    </>
  );
}
