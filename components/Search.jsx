"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const pathName = usePathname();
  const [isClicked, setIsClicked] = useState(false);
  const searchParamas = useSearchParams();
  const { replace } = useRouter();

  const doSearch = (e) => {
    setIsClicked(true);

    // Prevent navigation if searchTerm is empty
    if (!searchTerm.trim()) {
      setTimeout(() => {
        setIsClicked(false);
      }, 200);

      return;
    }

    const params = new URLSearchParams(searchParamas);

    params.set("search", searchTerm);

    if (pathName.includes("shop")) {
      replace(`${pathName}?${params.toString()}`);
    } else {
      replace(`${pathName}shop?${params.toString()}`);
    }

    setTimeout(() => {
      setIsClicked(false);
    }, 200);
  };

  return (
    <div className="md:w-full md:max-w-xl relative flex mx-6">
      <span className="absolute left-2 top-2  md:left-4 md:top-3 text-sm md:text-2xl text-gray-400">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input
        type="text"
        name="search"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full text-xs md:text-lg pl-6 border border-primary border-r-0 md:pl-12 md:py-3 pr-3 rounded-l-md focus:outline-none flex"
        placeholder="search here"
      />
      <button
        onClick={doSearch}
        className="bg-primary border border-primary text-white text-xs md:text-lg px-2 md:px-8 rounded-r-md hover:bg-transparent hover:text-primary transition flex"
      >
        {isClicked ? (
          <span className="pt-3">Search</span>
        ) : (
          <span className="-pt-3">Search</span>
        )}
      </button>
    </div>
  );
};

export default Search;
