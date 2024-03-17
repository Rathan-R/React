import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { dataSet } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    dataSet?.info;
  const { deliveryTime } = dataSet?.info?.sla;

  return (
    <div className="res-cards">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <p>{cuisines.slice(0, 2).join(",")}</p>
      <span className="rating">
        <span className="s-rating"> {avgRating}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <h4>{costForTwo.toUpperCase()}</h4>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};
export default RestaurantCard;
