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
    <div>
      <h1>Checkout has been successful</h1>
      {invoice && <InvoicePdfGenerator invoice={invoice} />}
    </div>
  );
};

export default SuccessPage;
