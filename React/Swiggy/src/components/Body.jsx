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

const Body = () => {
  const [topRestaurantData, setTopRestaurantData] = useState([]);
  const [onYourMindData, setOnYourMindData] = useState([]);
  const [topResTitle, setTopResTitle] = useState("");
  const [onlineResTitle, setOnlineResTitle] = useState("");
  const [data, setData] = useState({});

  const {
    coordinate: { lat, lng },
  } = useContext(Coordinates);

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

  async function fetchData() {
    const response = await fetch(
      "https://corsproxy.io/?" +
        encodeURIComponent(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
        ),
    );

    const result = await response.json();
    setData(result);
    // console.log(result);

    const cards = result?.data?.cards || [];

    const { onlineTitle, restaurants } = parseSwiggyCards(cards);

    //  On Your Mind
    const onYourMindCard = cards.find(
      (c) => c?.card?.card?.imageGridCards?.info,
    );

    //  Top Restaurants (slider)
    const topRestaurantCard = cards.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    //  Online Food Delivery title
    // const onlineFoodCard = cards.find(
    //   (c) => c?.card?.card?.title && c?.card?.card?.gridElements,
    // );

    setOnYourMindData(onYourMindCard?.card?.card?.imageGridCards?.info || []);

    setTopRestaurantData(
      topRestaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [],
    );

    setTopResTitle(topRestaurantCard?.card?.card?.header?.title || "");

    setOnlineResTitle(result.data.cards[2].card.card.title || "");
    // console.log(onlineFoodCard?.card);
  }

  useEffect(() => {
    fetchData();
  }, [lat, lng]);

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
