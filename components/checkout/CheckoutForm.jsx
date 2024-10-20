"use client";

import { useCartProductCount } from "@/app/(home)/hooks/useCartProductCount";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const { setProductCount } = useCartProductCount();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const name = `${formData.get("first-name")} ${formData.get("last-name")}`;
    const region = formData.get("region");
    const address = formData.get("address");
    const city = formData.get("city");
    const phone = formData.get("phone");
    const email = formData.get("email");

    try {
      const response = await fetch("/api/auth/invoice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, region, address, city, phone, email }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      router.push("/checkout/success");
      setProductCount(0);
      console.log("Invoice submitted successfully");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="col-span-8 border border-gray-200 p-4 rounded">
      <h3 className="text-base lg:text-lg font-medium capitalize mb-2 lg:mb-4">Checkout</h3>
      <div className="space-y-4 text-sm lg:text-base">
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="text-gray-600">
                First Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="input-box"
                required
              />
            </div>
            <div>
              <label htmlFor="last-name" className="text-gray-600">
                Last Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="input-box"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="region" className="text-gray-600">
              Country/Region
            </label>
            <input
              type="text"
              name="region"
              id="region"
              className="input-box"
            />
          </div>
          <div>
            <label htmlFor="address" className="text-gray-600">
              Street address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="input-box"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="text-gray-600">
              City
            </label>
            <input type="text" name="city" id="city" className="input-box" />
          </div>
          <div>
            <label htmlFor="phone" className="text-gray-600">
              Phone number
            </label>
            <input type="text" name="phone" id="phone" className="input-box" />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-box"
              required
            />
          </div>
          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
              required
            />
            <label
              htmlFor="aggrement"
              className="text-gray-600 ml-3 cursor-pointer text-sm"
            >
              I agree to the{" "}
              <Link href="#" className="text-primary">
                terms & conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
          >
            Place order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
