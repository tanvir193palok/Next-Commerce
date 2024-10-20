import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white lg:mt-10 pb-6 md:pb-12 border-t border-gray-100">
      <div className="container grid grid-cols-1 ">
        <div className="col-span-1 space-y-4">
          <div className="flex">
            <div className="flex">
              <Image
                src="/assets/images/logoo.jpg"
                width={200}
                height={200}
                alt="Logo"
                className="mt-12 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
              />
            </div>

            <div className="flex pt-28 pl-2">
              <p className="text-2xl lg:text-6xl font-bold">NEXT-</p>
              <span className="flex pl-1 lg:pl-2 lg:pt-3 text-lg lg:text-2xl text-primary">
                commerce
              </span>
            </div>
          </div>
          <div className="mr-2">
            <p className="text-gray-500 text-sm md:text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              hic?
            </p>
          </div>
          <div className="flex space-x-5">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-brands fa-facebook-square"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-brands fa-instagram-square"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-brands fa-twitter-square"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <i className="fa-brands fa-github-square"></i>
            </Link>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-tight lg:tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-2 lg:space-y-4">
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </Link>
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analytics
                </Link>
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </Link>
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-2 lg:space-y-4">
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-500 hover:text-gray-900 block"
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </Link>
                <Link
                  href="#"
                  className="text-sm md:text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </Link>
              </div>
            </div>
          </div>

          {/* Hidden on smaller screens and shown on medium and larger screens */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-2 lg:space-y-4">
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Marketing
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Analytics
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Commerce
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Insights
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-2 lg:space-y-4">
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Documentation
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  Guides
                </Link>
                <Link
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900 block"
                >
                  API Status
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
