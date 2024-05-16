import Image from "next/image";

const CopyrightText = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
        <div>
          <Image
            src="/assets/images/methods.png"
            height={60}
            width={240}
            alt="methods"
            className="h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default CopyrightText;
