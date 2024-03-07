import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variable
  const [ListOfRestaurants, setListOfRestaurant] = useState([]);
  const [filterdRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=11.1038476&lng=76.96574629999999"
    );

    const json = await data.json();
    setListOfRestaurant(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      json?.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
    console.log(
      json?.data.success.cards[1].gridWidget.gridElements.infoWithStyle
        .restaurants
    );
  };
  let count = 0;
  // Conditional Rendering
  return ListOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
          className="filter-btn"
          onClick={() => {
            setListOfRestaurant(
              ListOfRestaurants.filter((res) => res.info.avgRating > 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterdRes.map((res) => (
          <RestaurantCard key={res.info.id} dataSet={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
