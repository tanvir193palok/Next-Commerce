import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyrightText from "@/components/CopyrightText";
import { dbConnect } from "@/service/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next E-commerce",
  description: "Website built with Next.js 14",
};

export default async function RootLayout({ children }) {
  await dbConnect();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header isAuth={false} />
        {children}
        <Footer />
        <CopyrightText />
      </body>
    </html>
  );
}
