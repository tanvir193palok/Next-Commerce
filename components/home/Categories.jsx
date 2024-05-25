import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/category-6.jpg"
            width={500}
            height={500}
            alt="category 1"
            className="w-full h-full object-cover"
          />
          <Link
            href="/shop?category=Home Furniture"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Home Furniture
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/gym.jpg"
            width={500}
            height={500}
            alt="category 1"
            className="w-full h-full object-cover"
          />
          <Link
            href="/shop?category=Gym Accessories"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Gym Accessories
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/office.jpg"
            width={500}
            height={500}
            alt="category 1"
            className="w-full h-full object-cover"
          />
          <Link
            href="/shop?category=Office Furniture"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Office Furniture
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/music.jpg"
            width={500}
            height={500}
            alt="category 1"
            className="w-full h-full object-cover"
          />
          <Link
            href="/shop?category=Music Accessories"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Music Accessories
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/gadgets.jpg"
            width={500}
            height={500}
            alt="category 1"
            className="w-full h-full object-cover"
          />
          <Link
            href="/shop?category=Laptop Accessories"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Laptop Accessories
          </Link>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <Image
            src="/assets/images/category/fashion.jpeg"
            width={500}
            height={500}
            alt="category 1"
            className="w-full h-full object-cover"
          />
          <Link
            href="/shop?category=Fashion"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Fashion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
