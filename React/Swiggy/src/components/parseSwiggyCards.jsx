const parseSwiggyCards = (cards = []) => {
  const onYourMindCard = cards.find(
    (c) => c?.card?.card?.id === "whats_on_your_mind",
  );

  const topRestaurantCard = cards.find(
    (c) => c?.card?.card?.id === "top_brands_for_you",
  );

  const onlineFoodCard = cards.find(
    (c) => c?.card?.card?.id === "restaurant_grid_listing_v2",
  );

  return {
    onYourMindData: onYourMindCard?.card?.card?.imageGridCards?.info || [],

    topRestaurantData:
      topRestaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [],

    topResTitle: topRestaurantCard?.card?.card?.header?.title || "",

    onlineFoodData:
      onlineFoodCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [],

    onlineResTitle: onlineFoodCard?.card?.card?.header?.title || "",
  };
};

export default parseSwiggyCards;
