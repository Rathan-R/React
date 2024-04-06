import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";
const useRestaurantMenu = (rId) => {
  const [resInfo, setResInfo] = useState("");
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const api = SWIGGY_MENU_API + rId;
    const data = await fetch(api);
    console.log(data);
    const jsonData = await data.json();
    console.log(jsonData.data);
    setResInfo(jsonData?.data);
    console.log(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards
    );
  };
  return resInfo;
};

export default useRestaurantMenu;
