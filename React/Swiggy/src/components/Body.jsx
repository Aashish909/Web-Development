import { useEffect, useState } from "react";
import OnlineFoodDelivery from "./OnlineFoodDelivery";
import OnYourMind from "./onYourMind";
import TopRestaurant from "./TopRestaurant";
// import { fixedRestaurants } from "../utils/fixedRestaurants";
// import { fixedData } from "../utils/fixedData";

const Body = () => {
  const [topRestaurantData, setTopRestaurantData] = useState([]);
  const [onYourMindData, setOnYourMindData] = useState([]);

  async function fetchData() {
    const response = await fetch(
      "https://corsproxy.io/?" +
        encodeURIComponent(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6523312&lng=86.1326811&page_type=DESKTOP_WEB_LISTING",
        ),
    );

    const result = await response.json();

    setTopRestaurantData(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setOnYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    // console.log("onyouy mmidn::", result?.data?.cards[0]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div className="w-[75%] mx-auto mt-2 overflow-hidden">
        <OnYourMind data={onYourMindData} />
        <TopRestaurant data={topRestaurantData} />
        <OnlineFoodDelivery data={topRestaurantData} />
      </div>
    </div>
  );
};

export default Body;
