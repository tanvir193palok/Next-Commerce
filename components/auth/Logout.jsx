"use client";

import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <button
      className="text-gray-200 hover:text-white transition text-xs md:text-md md:uppercase pr-4 md:pr-0"
      onClick={() => signOut({ callbackUrl: "http://localhost:3000" })}
    >
      Logout
    </button>
  );
};

export default Logout;
