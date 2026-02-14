import React, { useContext, useEffect, useState } from 'react'
import { Coordinates } from '../context/contextApi';
import parseSwiggyCards from '../components/parseSwiggyCards';

const useRestaurantData = () => {
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
       
            `${import.meta.env.VITE_BASE_URL}/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
          )
      
  
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
    [
      topRestaurantData,
      onYourMindData,
      topResTitle,
      onlineResTitle,
      data
    ]
  )
}

export default useRestaurantData