import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* header */}

      <div className="bg-gray-200 shadow-lg w-full p-4 my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards.length})
          </span>
          <span className="font-extrabold text-lg">
            {!showItems ? "↓" : "→"}
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
