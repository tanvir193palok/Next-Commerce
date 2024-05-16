import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyrightText from "@/components/CopyrightText";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next E-commerce",
  description: "Website built with Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header isAuth={true} />
        {children}
      </body>
    </html>
  );
}
