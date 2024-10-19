"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryFilter = () => {
  const [query, setQuery] = useState([]);
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleFilterByCategory = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const checked = e.target.checked;

    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      const filteredQuery = query.filter((item) => item !== name);
      setQuery(filteredQuery);
    }
  };

  useEffect(() => {
    const selectedQuery = params.get("category");

    if (selectedQuery) {
      const decodedCategory = decodeURI(selectedQuery);
      const queryInCategory = decodedCategory.split("|");
      setQuery(queryInCategory);
    }
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      params.set("category", encodeURI(query.join("|")));
    } else {
      params.delete("category");
    }

    replace(`${pathName}?${params.toString()}`);
  }, [query]);

  return (
    <div>
      <h3 className="text-sm lg:text-xl text-gray-800 mb-1 ld:mb-3 uppercase font-medium">
        Categories
      </h3>
      <div className="space-y-1 lg:space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="Gym Accessories"
            id="Gym Accessories"
            checked={query.includes("Gym Accessories")}
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            onChange={handleFilterByCategory}
          />
          <label
            for="Gym Accessories"
            className="text-gray-600 ml-3 cusror-pointer text-sm lg:text-base"
          >
            Gym Accessories
          </label>
          <div className="ml-auto text-gray-600 text-sm">(15)</div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="Home Furniture"
            id="Home Furniture"
            checked={query.includes("Home Furniture")}
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            onChange={handleFilterByCategory}
          />
          <label
            for="Home Furniture"
            className="text-gray-600 ml-3 cusror-pointer text-sm lg:text-base"
          >
            Home Furniture
          </label>
          <div className="ml-auto text-gray-600 text-sm">(9)</div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="Office Furniture"
            id="Office Furniture"
            checked={query.includes("Office Furniture")}
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            onChange={handleFilterByCategory}
          />
          <label
            for="Office Furniture"
            className="text-gray-600 ml-3 cusror-pointer text-sm lg:text-base"
          >
            Office Furniture
          </label>
          <div className="ml-auto text-gray-600 text-sm">(21)</div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="Gadgets"
            id="Gadgets"
            checked={query.includes("Gadgets")}
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            onChange={handleFilterByCategory}
          />
          <label for="Gadgets" className="text-gray-600 ml-3 cusror-pointer text-sm lg:text-base">
            Gadgets
          </label>
          <div className="ml-auto text-gray-600 text-sm">(10)</div>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="Fashion"
            id="Fashion"
            checked={query.includes("Fashion")}
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
            onChange={handleFilterByCategory}
          />
          <label for="Fashion" className="text-gray-600 ml-3 cusror-pointer text-sm lg:text-base">
            Fashion
          </label>
          <div className="ml-auto text-gray-600 text-sm">(10)</div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
