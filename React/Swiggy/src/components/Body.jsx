import { useEffect, useState } from "react";
import OnlineFoodDelivery from "./OnlineFoodDelivery";
import OnYourMind from "./onYourMind";
import TopRestaurant from "./TopRestaurant";
import { fixedRestaurants } from "../utils/fixedRestaurants";
import { fixedData } from "../utils/fixedData";

const Body = () => {
  const [topRestaurantData, setTopRestaurantData] = useState([]);

  useEffect(() => {
    setTopRestaurantData(
      fixedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }, []);
  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto mt-2 overflow-hidden">
        <OnYourMind />
        <TopRestaurant />
        <OnlineFoodDelivery data={topRestaurantData} />
      </div>
    </div>
  );
};

export default Body;
