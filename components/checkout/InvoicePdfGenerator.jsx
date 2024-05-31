import { PDFDownloadLink, Text } from "@react-pdf/renderer";
import PDFDocument from "./PdfDocument";

const styles = {
  downloadText: {
    color: "blue",
    textDecoration: "underline",
    fontSize: 16,
  },
};

const InvoicePdfGenerator = ({ invoice }) => (
  <PDFDownloadLink
    document={<PDFDocument invoice={invoice} />}
    fileName="invoice.pdf"
  >
    {({ loading }) => (
      <Text style={styles.downloadText}>
        {loading ? "Loading document..." : "Download PDF"}
      </Text>
    )}
  </PDFDownloadLink>
);

export default InvoicePdfGenerator;
