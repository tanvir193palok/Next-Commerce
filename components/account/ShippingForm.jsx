"use client";

import { useState } from "react";

const ShippingForm = ({ setIsEditing, user }) => {
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name");
      const shippingId = formData.get("shippingId");
      const location = formData.get("location");
      const mobileNo = formData.get("mobileNo");
      const email = user?.email;

      const response = await fetch("/api/auth/shipping", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          shippingId,
          location,
          mobileNo,
          email,
        }),
      });

      response.status === 201 && setIsEditing(false);
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
            <label htmlFor="shippingId" className="block text-gray-700">
              Shipping ID
            </label>
            <input
              type="text"
              id="shippingId"
              name="shippingId"
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
        </form>
      )}
    </>
  );
};

export default ShippingForm;
