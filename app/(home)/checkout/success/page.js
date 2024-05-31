"use client";

import InvoicePdfGenerator from "@/components/checkout/InvoicePdfGenerator";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await fetch("/api/auth/invoice");
        if (!response.ok) {
          throw new Error("Failed to fetch invoice");
        }
        const data = await response.json();
        setInvoice(data.invoice);
      } catch (error) {
        console.error("Error fetching invoice:", error);
      }
    };
    fetchInvoice();
  }, []);

  return (
    <div className="flex justify-center py-20">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold pb-10">
          Checkout has been successfull
        </h1>
        <div className="flex justify-center font-semibold">{invoice && <InvoicePdfGenerator invoice={invoice} />}</div>
      </div>
    </div>
  );
};

export default SuccessPage;
