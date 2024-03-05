import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { useState } from "react";
import dataList from "../utils/mockdata";

const Body = () => {
  // normal js variable
  // let ListOfRestaurants = [
  //   {
  //     info: {
  //       id: "76622",
  //       name: "Geetha Canteen",
  //       cloudinaryImageId: "9ada441cb7c256cd6ae4bbe45e667576",
  //       locality: "Mettupalayam Road",
  //       areaName: "Tatabad",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["South Indian"],
  //       avgRating: 4.4,
  //       veg: true,
  //       parentId: "6459",
  //       avgRatingString: "4.4",
  //       totalRatingsString: "10K+",
  //       promoted: true,

  //       sla: {
  //         deliveryTime: 24,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "76623",
  //       name: "Ricer bowl",
  //       cloudinaryImageId: "9ada441cb7c256cd6ae4bbe45e667576",
  //       locality: "Mettupalayam Road",
  //       areaName: "Tatabad",
  //       costForTwo: "₹200 for two",
  //       cuisines: ["South Indian"],
  //       avgRating: 3.4,
  //       veg: true,
  //       parentId: "6459",
  //       avgRatingString: "4.4",
  //       totalRatingsString: "10K+",
  //       promoted: true,
  //       adTrackingId:
  //         "cid=11659668~p=1~eid=0000018e-0384-1d05-3962-36bf00980131~srvts=1709455973637~45826",
  //       sla: {
  //         deliveryTime: 24,
  //       },
  //     },
  //   },
  // ];

  //Local state variable
  let [ListOfRestaurants, setListOfRestaurant] = useState(dataList);
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurant(
              ListOfRestaurants.filter((res) => res.info.avgRating > 4.5)
            );

            console.log(ListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} dataSet={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
