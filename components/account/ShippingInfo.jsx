"use client";

import { useState } from "react";
import ShippingForm from "./ShippingForm";

const ShippingInfo = ({ user, info }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800 text-lg">
          {isEditing ? "Edit Shipping Address" : "Shipping address"}
        </h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-primary"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
      {isEditing ? (
        <ShippingForm setIsEditing={setIsEditing} user={user} />
      ) : (
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">{info?.name}</h4>
          <p className="text-gray-800">{info?.location}</p>
          <p className="text-gray-800">{info?.shippingId}</p>
          <p className="text-gray-800">{info?.mobileNo}</p>
        </div>
      )}
    </div>
  );
};

export default ShippingInfo;
