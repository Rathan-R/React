import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuHead from "./RestaurantMenuHead";

import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { rId } = useParams();

  const resInfo = useRestaurantMenu(rId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === "") {
    return <Shimmer />;
  }

  const itemCards0 =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-[60%] mx-[20%] mt-10">
      <RestaurantMenuHead resInfo={resInfo} />

      {itemCards0.map((c, ind) => (
        //controlled component
        <RestaurantCategory
          key={c?.card?.card.title}
          data={c?.card?.card}
          showItems={ind === showIndex ? true : false}
          setShowIndex={() => setShowIndex(ind)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
