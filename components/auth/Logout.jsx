"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <button
      className="text-gray-200 hover:text-white transition text-xs md:text-sm xl:text-base md:uppercase pr-4 md:pr-0"
      onClick={() => signOut({ callbackUrl: baseUrl })}
    >
      Logout
    </button>
  );
};

export default Logout;
