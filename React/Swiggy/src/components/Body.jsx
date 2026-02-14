import { useContext, useEffect, useState } from "react";
import OnlineFoodDelivery from "./OnlineFoodDelivery";
import OnYourMind from "./onYourMind";
import TopRestaurant from "./TopRestaurant";
import { Coordinates } from "../context/contextApi";
import parseSwiggyCards from "./parseSwiggyCards";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import useRestaurantData from "../hooks/useRestaurantData";

const Body = () => {
   const [
     topRestaurantData,
     onYourMindData,
     topResTitle,
     onlineResTitle,
     data,
   ] = useRestaurantData()

  const filterVal = useSelector((state) => state.filterSlice.filterVal);
  // console.log("filterVal", filterVal);

  // console.log("topRestaurantData", topRestaurantData);
  const filteredData = topRestaurantData.filter((item) => {
    if (!filterVal) return true;

    switch (filterVal) {
      case "Rating 4.0+":
        return item?.info?.avgRating >= 4.0;
      case "Offers":
        return Boolean(item?.info?.aggregatedDiscountInfoV3);
      case "Rs. 300-500":
        return (
          item?.info?.costForTwo?.slice(1, 4) >= 300 &&
          item?.info?.costForTwo?.slice(1, 4) <= 500
        );
      case "Less than Rs. 300":
        return item?.info?.costForTwo?.slice(1, 4) < 300;
      default:
        return true;
    }
  });


  return (
    <div className="w-full">
     {
      topRestaurantData.length  ? ( <div
        className="
                w-[80%]
                px-2
                sm:px-2
                md:px-4
                max-w-[1400px]
                mx-auto
                mt-2
                overflow-hidden
              "
      >
        {data.statusCode === 1 ? (
          <ErrorPage message={data.statusMessage} />
        ) : (
          <>
            <OnYourMind data={onYourMindData} />
            <TopRestaurant data={topRestaurantData} title={topResTitle} />
            <OnlineFoodDelivery
              data={filterVal ? filteredData : topRestaurantData}
              title={onlineResTitle}
            />
          </>
        )}
      </div>) :(<Shimmer/>)
     }
    </div>
  );
};

export default Body;
