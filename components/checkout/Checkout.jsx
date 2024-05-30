"use client";

import { useState } from "react";
import CheckoutSuccess from "./CheckoutSuccess";
import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";

const Checkout = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderData, setOrderData] = useState("");

  return (
    <>
      {orderPlaced ? (
        <CheckoutSuccess data={orderData} />
      ) : (
        <div class="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
          <CheckoutForm setData={setOrderData} />
          <CheckoutSummary
            setData={setOrderData}
            setOrderPlaced={setOrderPlaced}
          />
        </div>
      )}
    </>
  );
};

export default Checkout;
