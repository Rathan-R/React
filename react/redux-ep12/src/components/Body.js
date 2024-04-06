import RestaurantCard, { withCategory } from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  //Local state variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filterdRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const VegCategory = withCategory(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=11.1038476&lng=76.96574629999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (!useOnlineStatus()) {
    return <h1>You are offline</h1>;
  }

  // Conditional Rendering
  return ListOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-center max-sm:flex-col ">
        <div className="search-container m-4 p-4 ">
          <input
            className="p-1 w-56 border border-solid border-slate-300 rounded-l-md text-lg outline-none max-sm:w-[70%] p-1 text-sm"
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-700 px-2 py-1 mr-2 rounded-r-md text-white text-lg border border-solid border-slate-400 max-sm:px-1 text-sm"
            onClick={() => {
              //filter the restaurant cards and update the ui

              setFilteredRes(
                ListOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-gray-300 w-40 h-10 text-grey rounded max-sm:px-1 text-sm"
          onClick={() => {
            setFilteredRes(
              ListOfRestaurants.filter((res) => res.info.avgRating > 4.2)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap justify-center items-center">
        {filterdRes.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            {res.info.veg ? (
              <VegCategory dataSet={res} />
            ) : (
              <RestaurantCard dataSet={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
