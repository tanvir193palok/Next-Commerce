import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('/banner-bg.jpg')] bg-cover bg-no-repeat bg-center py-20 md:py-36">
      <div className="container px-10 md:px-4">
        <h1 className="text-3xl md:text-6xl text-gray-800 font-medium mb-4 capitalize">
          best collection for <br /> home decoration
        </h1>
        <p className="text-base md:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
        <div className="mt-12">
          <Link
            href="#"
            className="bg-primary border border-primary text-white px-6 py-3 md:px-8 md:py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
