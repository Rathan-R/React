import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { dataList } from "../utils/mockdata";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="res-container">
        {dataList.map((res) => (
          <RestaurantCard key={res.info.id} dataSet={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
