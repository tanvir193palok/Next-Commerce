import { getAllProducts } from "@/database/queries";
import ProductCard from "../product/ProductCard";

const Products = async ({ category, min, max }) => {
  const products = await getAllProducts(category, min, max);
  
  return (
    <div className="col-span-3">
      <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Products;
