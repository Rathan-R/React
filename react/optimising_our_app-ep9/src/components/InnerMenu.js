import React from "react";

function InnerMenu({ res }) {
  return (
    <ul className="menuList">
      {res.card.card.itemCards
        ? res.card.card.itemCards.map((tit) => (
            <li key={tit.card.info.id}>
              {tit.card.info.name}
              {"--->"}
              {tit.card.info.price
                ? tit.card.info.price / 100
                : tit.card.info.defaultprice / 100}
            </li>
          ))
        : res.card.card.categories.map((res1, ind) => (
            <ul>
              <li key={ind}>
                {res1.title}
                {"("}
                {res1.itemCards.length}
                {")"}
              </li>
              {res1.itemCards.map((tit) => (
                <ul>
                  <li key={tit.card.info.id}>
                    {tit.card.info.name}
                    {"-->"}
                    {tit.card.info.price
                      ? tit.card.info.price / 100
                      : tit.card.info.defaultprice / 100}
                  </li>
                </ul>
              ))}
            </ul>
          ))}
    </ul>
  );
}

export default InnerMenu;
