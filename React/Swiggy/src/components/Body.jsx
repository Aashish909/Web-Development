import { useContext, useEffect, useState } from "react";
import OnlineFoodDelivery from "./OnlineFoodDelivery";
import OnYourMind from "./onYourMind";
import TopRestaurant from "./TopRestaurant";
import { Coordinates } from "../context/contextApi";
import parseSwiggyCards from "./parseSwiggyCards";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";

const Body = () => {
  const [topRestaurantData, setTopRestaurantData] = useState([]);
  const [onYourMindData, setOnYourMindData] = useState([]);
  const [topResTitle, setTopResTitle] = useState("");
  const [onlineResTitle, setOnlineResTitle] = useState("");
  const [data, setData] = useState({});

  const {
    coordinate: { lat, lng },
  } = useContext(Coordinates);

  async function fetchData() {
    const response = await fetch(
      "https://corsproxy.io/?" +
        encodeURIComponent(
          `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
        ),
    );

    const result = await response.json();
    setData(result);
    console.log(result);

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
      <div className="w-[75%] mx-auto mt-2 overflow-hidden">
        {data.statusCode === 1 ? (
          <ErrorPage message={data.statusMessage} />
        ) : (
          <>
            <OnYourMind data={onYourMindData} />
            <TopRestaurant data={topRestaurantData} title={topResTitle} />
            <OnlineFoodDelivery
              data={topRestaurantData}
              title={onlineResTitle}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
