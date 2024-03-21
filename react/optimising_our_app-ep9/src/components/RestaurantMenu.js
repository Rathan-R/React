import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuHead from "./RestaurantMenuHead";
import MenuItems from "./MenuItems";

function RestaurantMenu() {
  const { rId } = useParams();

  const resInfo = useRestaurantMenu(rId);

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
      <RestaurantMenuHead resInfo={resInfo} />
      <MenuItems itemCards1={itemCards1} />
    </div>
  );
}

export default RestaurantMenu;
