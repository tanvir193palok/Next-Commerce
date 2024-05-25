"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const BillingForm = ({ setIsEditing, user }) => {
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const location = formData.get("location");
      const billingId = formData.get("billingId");
      const mobileNo = formData.get("mobileNo");
      const email = user?.email;

      const response = await fetch("/api/auth/billing", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          location,
          billingId,
          mobileNo,
          email,
        }),
      });

      response.status === 201 && setIsEditing(false);
      router.refresh();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      {error ? (
        <div className="text-red-500 text-lg">{error}</div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="billingId" className="block text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              id="billingId"
              name="billingId"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="mobileNo" className="block text-gray-700">
              Mobile No
            </label>
            <input
              type="text"
              id="mobileNo"
              name="mobileNo"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Save
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      )}
    </>
  );
};

export default BillingForm;
