import CategoryFilter from "./CategoryFilter";
import SizeFilter from "./SizeFilter";
import PriceFilter from "./PriceFilter";

const Sidebar = () => {
  return (
    <div class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hiddenb hidden md:block">
      <div class="divide-y divide-gray-200 space-y-5">
        <CategoryFilter />
        <PriceFilter />
        <SizeFilter />
      </div>
    </div>
  );
};

export default Sidebar;
