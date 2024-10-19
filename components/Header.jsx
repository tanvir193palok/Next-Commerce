import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import WishCount from "./nav/WishCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import ProductInCartCount from "./nav/ProductInCartCount";
import Search from "./Search";
import { redirect } from "next/navigation";
import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Header = async ({ isAuth }) => {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  if (session?.error === "RefreshAccessTokenError") {
    redirect("/login");
  }

  return (
    <header className="py-2 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        {isAuth ? (
          <Link href="/">
            <div className="flex">
              <Image
                src="/assets/images/logoo.jpg"
                width={20}
                height={20}
                alt="Logo"
                className="w-10 h-10 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
              />
              <div className="flex pt-4">
                <p className="text-2xl font-bold">NEXT-</p>
                <span className="flex pl-1 text-lg text-primary">commerce</span>
              </div>
            </div>
          </Link>
        ) : (
          <>
            <Link href="/">
              <div className="flex">
                <Image
                  src="/assets/images/logoo.jpg"
                  width={80}
                  height={40}
                  alt="Logo"
                  className="w-14 h-10 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
                />
                <div className="hidden md:flex pt-4">
                  <p className="text-2xl font-bold">NEXT-</p>
                  <span className="flex text-xs md:text-lg text-primary">
                    commerce
                  </span>
                </div>
              </div>
            </Link>
            <Search />
            <div className="flex items-center space-x-3 md:space-x-4">
              <Link
                href={isAuthenticated ? "/wishlist" : "/login"}
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-base md:text-2xl">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className="hidden md:flex text-xs leading-3">Wishlist</div>
                <WishCount />
              </Link>
              <Link
                href={isAuthenticated ? "/checkout" : "/login"}
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-base md:text-2xl">
                  <FontAwesomeIcon icon={faBagShopping} />
                </div>
                <div className="hidden md:flex text-xs leading-3">Cart</div>
                <ProductInCartCount />
              </Link>
              <Link
                href={isAuthenticated ? "/account" : "/login"}
                className="text-center text-gray-700 hover:text-primary transition relative md:pl-6"
              >
                <div className="text-base md:text-2xl">
                  <FontAwesomeIcon icon={faUser} size="1x" />
                </div>
                <div className="hidden md:flex text-xs leading-3">Account</div>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
