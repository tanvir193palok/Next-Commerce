import ProductCard from "./ProductCard";

const CategorizedProduct = () => {
  return (
    <div className="container pb-16">
      <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">
        top new arrival
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default CategorizedProduct;
