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
import { getWishlist } from "@/database/queries";
import { auth } from "@/auth";
import AddWishedProductOnLogin from "@/components/AddWishedProductOnLogin";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next E-commerce",
  description: "Website built with Next.js 14",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  const session = await auth();

  let wishCount = 0;
  if (session?.user) {
    const wishes = await getWishlist();
    wishCount = wishes.length;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <WishProvider initialWishCount={wishCount}>
          <Header isAuth={false} />
          <Navbar />
          {children}
          <AddWishedProductOnLogin user={session?.user} />
          <Footer />
          <CopyrightText />
        </WishProvider>
      </body>
    </html>
  );
}
