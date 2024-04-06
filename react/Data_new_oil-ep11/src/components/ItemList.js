import { CDN_URL } from "./../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between border-gray-300 border-b-2 p-4 m-2"
        >
          <div className="font-medium w-[70%]">
            <span>{item?.card?.info?.name}</span>
            <span className="block text-gray-700 text-[15px]">
              {"₹"}
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </span>
            <div className="text-xs text-gray-500">
              {item?.card?.info?.description}
            </div>
          </div>

          <div className=" w-[30%] flex items-center justify-center">
            <div className=" w-[90px] h-[90px] relative">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-full h-full rounded-sm "
                alt={item?.card?.info?.name}
              />
              <button className="text-sm absolute bottom-[-10px] bg-white text-green-700 font-semibold rounded-sm ml-[50%] mr-[50%] translate-x-[-50%] w-9/12 p-1">
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
