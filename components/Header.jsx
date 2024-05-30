import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import WishCount from "./nav/WishCount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import ProductInCartCount from "./nav/ProductInCartCount";

const Header = async ({ isAuth }) => {
  const session = await auth();
  const isAuthenticated = !!session?.user;

  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        {isAuth ? (
          <Link href="/">
            <Image
              src="/assets/images/logo.svg"
              width={80}
              height={80}
              alt="Logo"
              className="w-32"
            />
          </Link>
        ) : (
          <>
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                width={80}
                height={80}
                alt="Logo"
                className="w-32"
              />
            </Link>
            <div className="w-full max-w-xl relative flex">
              <span className="absolute left-4 top-3 text-lg text-gray-400">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                name="search"
                id="search"
                className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                placeholder="search"
              />
              <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">
                Search
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href={isAuthenticated ? "/wishlist" : "/login"}
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-2xl">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="text-xs leading-3">Wishlist</div>
                <WishCount />
              </Link>
              <Link
                href={isAuthenticated ? "/checkout" : "/login"}
                className="text-center text-gray-700 hover:text-primary transition relative"
              >
                <div className="text-2xl">
                  <i className="fa-solid fa-bag-shopping"></i>
                </div>
                <div className="text-xs leading-3">Cart</div>
                <ProductInCartCount />
              </Link>
              <Link
                href={isAuthenticated ? "/account" : "/login"}
                className="text-center text-gray-700 hover:text-primary transition relative md:pl-6"
              >
                <div className="text-2xl">
                  <FontAwesomeIcon icon={faUser} size="1x" />
                </div>
                <div className="text-xs leading-3">Account</div>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
