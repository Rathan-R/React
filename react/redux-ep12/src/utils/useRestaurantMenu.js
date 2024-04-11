import { useEffect, useState } from "react";
import { SWIGGY_MENU_API } from "./constants";
import MOCK_DATA from "../components/mocks/resMenuMockData.json";
const useRestaurantMenu = (rId) => {
  const [resInfo, setResInfo] = useState("");
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const api = SWIGGY_MENU_API + rId;
    const data = await fetch(api);

    const jsonData = await data.json();

    // setResInfo(jsonData?.data);
    setResInfo(MOCK_DATA?.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
