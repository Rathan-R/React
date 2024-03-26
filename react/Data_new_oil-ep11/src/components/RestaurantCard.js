import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { dataSet } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    dataSet?.info;
  const { deliveryTime } = dataSet?.info?.sla;

  return (
    <div className="m-4 p-4 w-60 bg-gray-100 h-[340px] rounded-lg hover:shadow-2xl hover:bg-slate-100 ">
      <img
        className="res-logo min-w-full rounded-sm h-[150px]"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-lg">{name}</h3>ssad
      <p>{cuisines.slice(0, 2).join(",")}</p>
      <span className="rating flex bg-green-600 h-5 w-10 justify-center rounded-sm text-[15px] items-center">
        <span className="s-rating text-white"> {avgRating}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-6 text-yellow-500"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <h4 className="font-medium">{costForTwo.toUpperCase()}</h4>
      <h5 className="text-sm text-gray-500">{deliveryTime} minutes</h5>
    </div>
  );
};
export default RestaurantCard;
