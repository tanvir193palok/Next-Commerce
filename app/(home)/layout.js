import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyrightText from "@/components/CopyrightText";
import { dbConnect } from "@/service/mongo";
import Navbar from "@/components/nav/Navbar";
import WishProvider from "./providers/WishProvider";
import { getProductsInCart, getWishlist } from "@/database/queries";
import { auth } from "@/auth";
import AddWishedProductOnLogin from "@/components/AddWishedProductOnLogin";
import CartProvider from "./providers/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next E-commerce",
  description: "Website built with Next.js 14",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  const session = await auth();

  let wishCount = 0;
  let cartProductCount = 0;
  if (session?.user) {
    const wishes = await getWishlist();
    const cartProduct = await getProductsInCart();
    wishCount = wishes.length;
    cartProductCount = cartProduct.length;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <WishProvider initialWishCount={wishCount}>
          <CartProvider initialCartProduct={cartProductCount}>
            <Header isAuth={false} />
            <Navbar />
            {children}
            <AddWishedProductOnLogin user={session?.user} />
          </CartProvider>
        </WishProvider>
        <Footer />
        <CopyrightText />
      </body>
    </html>
  );
}
