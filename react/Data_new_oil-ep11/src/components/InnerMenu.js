import React from "react";

function InnerMenu({ res }) {
  return (
    <ul className="pt-4 ">
      {res.card.card.itemCards
        ? res.card.card.itemCards.map((tit) => (
            <li key={tit.card.info.id} className="flex justify-between">
              <p>{tit.card.info.name}</p>

              <p>
                {tit.card.info.price
                  ? tit.card.info.price / 100
                  : tit.card.info.defaultprice / 100}
              </p>
            </li>
          ))
        : res.card.card.categories.map((res1, ind) => (
            <ul>
              <li
                key={ind}
                className="font-bold border border-solid border-gray-200 p-2"
              >
                {res1.title}
                {"("}
                {res1.itemCards.length}
                {")"}
              </li>
              {res1.itemCards.map((tit) => (
                <ul>
                  <li key={tit.card.info.id} className="flex justify-between">
                    <p>{tit.card.info.name}</p>

                    <p>
                      {tit.card.info.price
                        ? tit.card.info.price / 100
                        : tit.card.info.defaultprice / 100}
                    </p>
                  </li>
                </ul>
              ))}
            </ul>
          ))}
    </ul>
  );
}

export default InnerMenu;
