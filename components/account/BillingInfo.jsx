"use client";

import { useState } from "react";
import BillingForm from "./BillingForm";

const BillingInfo = ({ user, info }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="shadow rounded bg-white px-4 pt-2 lg:pt-6 pb-4 lg:pb-8">
      <div className="flex items-center justify-between mb-2 lg:mb-4">
        <h3 className="font-medium text-gray-800 text-base md:text-lg">
          {isEditing ? "Edit Billing Address" : "Billing address"}
        </h3>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-primary"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>
      {isEditing ? (
        <BillingForm setIsEditing={setIsEditing} user={user} info={info} />
      ) : (
        <div className="space-y-1 text-sm lg:text-base">
          <h4 className="text-gray-700 font-medium">{info?.name}</h4>
          <p className="text-gray-800">{info?.location}</p>
          <p className="text-gray-800">{info?.billingId}</p>
          <p className="text-gray-800">{info?.mobileNo}</p>
        </div>
      )}
    </div>
  );
};

export default BillingInfo;
