import CopyrightText from "@/components/CopyrightText";
import Footer from "@/components/Footer";
import Ads from "@/components/home/Ads";
import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import Features from "@/components/home/Features";
import NewArrivedProduct from "@/components/home/NewArrivedProduct";
import TrendingProducts from "@/components/home/TrendingProducts";
import Navbar from "@/components/nav/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Features />
      <Categories />
      <NewArrivedProduct />
      <Ads />
      <TrendingProducts />
      <Footer />
      <CopyrightText />
    </>
  );
}
