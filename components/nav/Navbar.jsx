import Link from "next/link";
import DropDown from "./DropDown";
import { auth } from "@/auth";
import Logout from "../auth/Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-gray-800">
      <div className="flex md:container">
        <div className="px-3 py-2 md:px-8 md:py-4 bg-primary items-center cursor-pointer relative group">
          <span className="text-white">
            <FontAwesomeIcon icon={faBars} />
          </span>
          <span className="capitalize ml-2 text-white md:flex hidden">All Categories</span>

          {/* Dropdown */}
          <DropDown />
        </div>

        <div className="flex items-center justify-between flex-grow pl-2 md:pl-12 py-3 md:py-5">
          <div className="flex items-center space-x-3 md:space-x-6 text-xs md:text-md md:uppercase">
            <Link
              href="/"
              className="text-gray-200 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-gray-200 hover:text-white transition"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              About us
            </Link>
            <Link
              href="#"
              className="text-gray-200 hover:text-white transition"
            >
              Contact us
            </Link>
          </div>
          {session?.user ? (
            <Logout />
          ) : (
            <Link
              href="/login"
              className="text-gray-200 hover:text-white transition text-xs md:text-md uppercase"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
