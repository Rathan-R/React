import React from "react";
import InnerMenu from "./InnerMenu";
function MenuItems({ itemCards1 }) {
  return (
    <div className="menu-title">
      <ul>
        {itemCards1.map((res, ind) => (
          <li key={ind}>
            <span style={{ fontWeight: "bold" }}>
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
