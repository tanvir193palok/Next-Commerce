const SummaryProduct = ({ product }) => {
  const totalprice = product?.price * product?.quantity;

  return (
    <div className="flex flex-col">
      <div>
        <h5 className="text-gray-800 tracking-wide font-medium w-full">
          {product.name}
        </h5>
      </div>
      <div className="flex justify-between mt-2">
        <p className="text-sm text-gray-600">
          Price Per Product: ${product?.price}
        </p>
        <p className="text-gray-600">x{product?.quantity}</p>
        <p className="text-gray-800 font-medium">$ {totalprice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SummaryProduct;
