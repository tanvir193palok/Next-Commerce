import ProductCard from "./product/ProductCard";

const CategorizedProduct = ({ products, type }) => {
  
  return (
    <div className="container py-10 md:py-16">
      <h2 class="text-xl lg:text-2xl font-medium text-gray-800 uppercase mb-6">{type}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-3 lg:gap-5">
        {products &&
          products.slice(0, 4).map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategorizedProduct;
