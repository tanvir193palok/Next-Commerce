import Link from "next/link";

const SocialLogin = () => {
  return (
    <div class="mt-4 flex gap-4">
      <Link
        href="#"
        class="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
      >
        facebook
      </Link>
      <Link
        href="#"
        class="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
      >
        google
      </Link>
    </div>
  );
};

export default SocialLogin;
