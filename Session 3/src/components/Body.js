import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State Variabel - super powerfull react
  //whenever state var update react will re render the components

  //set function is used to trigger the reconcicaltion algorithm that why its needed in a hook

  const [listOfRestarants, setListOfRestarants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter Logic here
            const filtredList = listOfRestarants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestarants(filtredList);
            console.log(listOfRestarants);
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {listOfRestarants.map((restaurant) => (
          <RestaurentCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
