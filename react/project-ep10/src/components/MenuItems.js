import React from "react";
import InnerMenu from "./InnerMenu";
function MenuItems({ itemCards1 }) {
  return (
    <div className="pt-4">
      <ul>
        {itemCards1.map((res, ind) => (
          <li
            key={ind}
            className="pb-4  border border-solid border-gray-300 p-4"
          >
            <span className="font-bold border border-solid border-gray-300 flex p-3 bg-black text-white">
              {res.card.card.title} {"("}
              {res.card.card.itemCards
                ? res.card.card.itemCards.length
                : res.card.card.categories.length}
              {")"}
            </span>
            <InnerMenu res={res} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuItems;
