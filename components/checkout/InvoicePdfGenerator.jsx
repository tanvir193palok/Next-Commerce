import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "./PDFDocument";

const InvoicePdfGenerator = ({ invoice }) => (
  <PDFDownloadLink
    document={<PDFDocument invoice={invoice} />}
    fileName="invoice.pdf"
  >
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download PDF"
    }
  </PDFDownloadLink>
);

export default InvoicePdfGenerator;
