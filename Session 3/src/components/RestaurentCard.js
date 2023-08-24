import { CDN_URL } from "../utils/constant";

const RestaurentCard = (props) => {
  
  const { resData: { info } } = props;
  
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = info;


  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="res-card-info">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{info.sla.deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurentCard;
