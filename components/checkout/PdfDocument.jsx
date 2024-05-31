import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  field: {
    marginBottom: 5,
    fontSize: 12,
  },
  label: {
    fontWeight: "bold",
  },
});

const PDFDocument = ({ invoice }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.field}>
          <Text style={styles.label}>Name:</Text>
          <Text>{invoice.name}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Region:</Text>
          <Text>{invoice.region}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Address:</Text>
          <Text>{invoice.address}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>City:</Text>
          <Text>{invoice.city}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone:</Text>
          <Text>{invoice.phone}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email:</Text>
          <Text>{invoice.email}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Created At:</Text>
          <Text>{invoice.createdAt}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Products:</Text>
          {invoice.products.map((product, index) => (
            <View key={index}>
              <Text>- Name: {product.name}</Text>
              <Text> Quantity: {product.quantity}</Text>
              <Text> Price: {product.price}</Text>
            </View>
          ))}
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Total Price:</Text>
          <Text>{invoice.totalPrice}</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
