"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PriceFilter = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [min, setMin] = useState(searchParams.get("min") || "");
  const [max, setMax] = useState(searchParams.get("max") || "");

  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (min) {
      params.set("min", min);
    } else {
      params.delete("min");
    }

    if (max) {
      params.set("max", max);
    } else {
      params.delete("max");
    }

    replace(`${pathName}?${params.toString()}`);
  }, [min, max]);

  return (
    <div className="pt-4">
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        Price
      </h3>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          name="min"
          id="min"
          value={min}
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="min"
          onChange={(e) => setMin(e.target.value)}
        />
        <span className="mx-3 text-gray-500">-</span>
        <input
          type="text"
          name="max"
          id="max"
          value={max}
          className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
          placeholder="max"
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
