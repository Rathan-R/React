import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

function RestaurantMenu() {
  const [resInfo, setResInfo] = useState("");
  const { rId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    console.log(rId);
    const api = SWIGGY_MENU_API + rId;
    const data = await fetch(api);
    console.log(data);
    const jsonData = await data.json();
    console.log(jsonData.data);
    setResInfo(jsonData?.data);
    console.log(
      jsonData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards
    );
  };

  if (resInfo === "") {
    return <Shimmer />;
  }

  const { name, cuisines, areaName, sla, avgRating, totalRatingsString } =
    resInfo?.cards[0]?.card?.card?.info;
  const itemCards0 =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const itemCards1 = [];
  for (let i = 2; i < itemCards0.length - 2; i++) {
    itemCards1.push(itemCards0[i]);
  }
  console.log(itemCards1);

  return (
    <div className="menuContainer">
      <div className="resDetails">
        <div className="leftResDetails">
          <h3>{resInfo?.cards[0]?.card?.card?.info.name}</h3>
          <p style={{ fontSize: "10px", color: "gray" }}>
            {resInfo?.cards[0]?.card?.card?.info.cuisines.join(",")}
          </p>
          <p style={{ fontSize: "10px", color: "gray" }}>
            {resInfo?.cards[0]?.card?.card?.info.areaName}
            {","}
            {resInfo?.cards[0]?.card?.card?.info.sla?.lastMileTravelString}
          </p>
        </div>
        <div className="rightResDetails">
          <p>
            <span>{resInfo?.cards[0]?.card?.card?.info.avgRating} </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </p>
          <span className="rate">
            {resInfo?.cards[0]?.card?.card?.info.totalRatingsString}
          </span>
        </div>
      </div>
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
              <ul className="menuList">
                {res.card.card.itemCards
                  ? res.card.card.itemCards.map((tit) => (
                      <li key={tit.card.info.id}>
                        {tit.card.info.name}
                        {"--->"}
                        {tit.card.info.price / 100}
                      </li>
                    ))
                  : res.card.card.categories.map((res1) => (
                      <ul>
                        <li>
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
                              {tit.card.info.price?tit.card.info.price / 100:tit.card.info.defaultprice / 100}
                            </li>
                          </ul>
                        ))}
                      </ul>
                    ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
