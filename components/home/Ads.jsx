import Image from "next/image";
import Link from "next/link";

const Ads = () => {
  return (
    <div class="container pb-10 md:pb-16">
      <Link href="#">
        <Image
          src="/assets/images/offer.jpg"
          width={1800}
          height={500}
          alt="ads"
          class="w-full"
        />
      </Link>
    </div>
  );
};

export default Ads;
