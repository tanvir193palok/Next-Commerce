const Description = ({ description }) => {
  return (
    <div className="container lg:pb-16 pt-8 lg:pt-10">
      <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-1 lg:pb-3 font-medium">
        Product details
      </h3>
      <div className="w-full lg:w-3/5 pt-2 lg:pt-6">
        <div className="text-gray-600 text-sm lg:text-base">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
