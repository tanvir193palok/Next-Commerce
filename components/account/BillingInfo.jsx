"use client";

import { useState } from "react";
import BillingForm from "./BillingForm";

const BillingInfo = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800 text-lg">
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
        <BillingForm setIsEditing={setIsEditing} user={user} />
      ) : (
        <div className="space-y-1">
          <h4 className="text-gray-700 font-medium">John Doe</h4>
          <p className="text-gray-800">Medan, North Sumatera</p>
          <p className="text-gray-800">20317</p>
          <p className="text-gray-800">0811 8877 988</p>
        </div>
      )}
    </div>
  );
};

export default BillingInfo;
