import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dishes from "./Dishes";
import SearchRestaurant, { withHoc } from "./SearchRestaurant";
import { Coordinates } from "../context/contextApi";
import { resetSimilarResDish, toggleIsSimilarResDishes } from "../redux/toggleSlice";
import SearchShimmer from "./SearchShimmer";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  
  const [dishes, setDishes] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);

  const [selectedResDish, setSelectedResDish] = useState(null);
  const [similarResDishes, setSimilarResDishes] = useState([]);

  const filterOptions = ["Restaurant", "Dishes"];
  const [activeBtn, setActiveBtn] = useState("Dishes");const [loading, setLoading] = useState(false);



    const {
      coordinate: { lat, lng },
    } = useContext(Coordinates);

    // console.log(lat, lng);
    

  const dispatch = useDispatch();

  function handleFilterBtn(filterName) {
    setActiveBtn(activeBtn === filterName ? activeBtn : filterName);
  }
  const {isSimilarResDishes, city, resLocation, resId, itemId} = useSelector(
    (state) => state.toggleSlice.similarResDish,
  );

   
  // console.log({ isSimilarResDishes, city, resLocation, resId, itemId });

  
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedQuery(searchQuery);
  }, 300); 

  return () => clearTimeout(timer);
}, [searchQuery]);


  async function fetchSimilarResDishes() {

    let pathname = `/city/${city}/${resLocation}`
    let encodedPath = encodeURIComponent(pathname)

    // console.log(encodedPath)
    // console.log(
    //   `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=undefined&submitAction=ENTER&selectedPLTab=dish-add&restaurantMenuUrl=${encodedPath}-rest${resId}%3Fquery%3D${searchQuery}&restaurantIdOfAddedItem=${resId}&itemAdded=${itemId}`,
    // );
    const data = await fetch(
      "https://corsproxy.io/?" +
        encodeURIComponent(
          `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=undefined&submitAction=ENTER&selectedPLTab=dish-add&restaurantMenuUrl=${encodedPath}-rest${resId}%3Fquery%3D${searchQuery}&restaurantIdOfAddedItem=${resId}&itemAdded=${itemId}`,
        ),
    );
    let result = await data.json();
    // console.log("result:", result)
    // console.log(
    //   "similar select dishe : ",
    //   result?.data?.cards[2]?.card?.card?.cards
    // );
    // console.log("select dishe : ", result?.data?.cards[1]);

  // console.log("fetch similarResDishes: ",result?.data?.cards)
    setSelectedResDish(result?.data?.cards[1]);
    setSimilarResDishes(result?.data?.cards[2]?.card?.card?.cards);
    dispatch(resetSimilarResDish())
    
  }
    useEffect(() => {
      if(isSimilarResDishes){
        fetchSimilarResDishes()
      }
    }, [isSimilarResDishes]);

  async function fetchDishes() {
    const data = await fetch(
     
          `${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${debouncedQuery}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=e278d92b-ccff-15a9-cb63-44e0fe26e2a8&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22Autosuggest%2FTop%2520200%2520queries%2FPizza.png%22%2C%22dishFamilyId%22%3A%22846647%22%2C%22dishFamilyIds%22%3A%5B%22846647%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`,
        )
    let result = await data.json();
    // console.log(
    //   "Dishes result: ",
    //   result?.data?.cards[1].groupedCard?.cardGroupMap?.DISH?.cards,
    // );
    const dishes =
      result?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards ?? [];

    setDishes(dishes.filter((item) => item?.card?.card?.info));
  }

  async function fetchRestaurantData() {
    const data = await fetch(
      
          `${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${debouncedQuery}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=e278d92b-ccff-15a9-cb63-44e0fe26e2a8&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22Autosuggest%2FTop%2520200%2520queries%2FPizza.png%22%2C%22dishFamilyId%22%3A%22846647%22%2C%22dishFamilyIds%22%3A%5B%22846647%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&selectedPLTab=RESTAURANT`,
        )
  
    let result = await data.json();
    // console.log(
    //   "Restaurant result: ",
    //   result?.data?.cards[0].groupedCard?.cardGroupMap?.RESTAURANT?.cards,
    // );
    const restaurantData =
      result?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards ??
      [];

    setRestaurantData(restaurantData.filter((item) => item?.card?.card?.info));
  }
//  useEffect(() => {
//    if (!debouncedQuery) {
//      setDishes([]);
//      setRestaurantData([]);
//      setSelectedResDish(null)
//      return;
//    }

//    fetchDishes();
//    fetchRestaurantData();
//  }, [debouncedQuery]);
//  console.log("selectedResDish", selectedResDish)

useEffect(() => {
  if (!debouncedQuery.trim()) {
    setDishes([]);
    setRestaurantData([]);
    setLoading(false);
    return;
  }

  const fetchData = async () => {
    setLoading(true); // 👈 show shimmer

    await Promise.all([fetchDishes(), fetchRestaurantData()]);

    setLoading(false); // 👈 hide shimmer
  };

  fetchData();
}, [debouncedQuery]);


const PromotedRes =withHoc(SearchRestaurant)

  return (
    <div className="w-full mt-10 md:w-[800px] mx-auto">
      <div className="w-full relative">
        <i className="fi fi-rr-angle-small-left text-2xl opacity-80 absolute top-1/2 -translate-y-1/3 left-3"></i>
        {/* <input
          className="w-full border border-gray-300  px-10 py-3 focus:outline-none font-semibold "
          type="text"
          placeholder="Search for restaurant and food"
          onChange={(e) => setSearchQuery(e.target.value) &&  setSelectedResDish(null)}
        /> */}
        <input
          className="w-full border border-gray-300 px-10 py-3 focus:outline-none font-semibold"
          type="text"
          value={searchQuery}
          placeholder="Search for restaurant and food"
          onChange={(e) => {
            const value = e.target.value;

            setSearchQuery(value);

            // reset selected dish when user starts typing again
            setSelectedResDish(null);
            setSimilarResDishes([]);
          }}
        />
        {searchQuery ? (
          <i
            onClick={() => {
              setSearchQuery("");
              setSelectedResDish(null);
              // setDishes([]);
              // setRestaurantData([]);
            }}
            className="fi fi-rr-cross-small absolute text-2xl opacity-80 
            top-3/5 -translate-y-1/2 right-3 cursor-pointer "
          ></i>
        ) : (
          <i className="fi fi-rs-search absolute text-lg  opacity-70 top-3/5 -translate-y-1/2 right-3"></i>
        )}
      </div>
      {!selectedResDish && (
        <div className="my-6 flex flex-wrap gap-3">
          {filterOptions.map((filterName, index) => (
            <button
            key={index}
              onClick={() => handleFilterBtn(filterName)}
              className={
                "filterBtn flex gap-2 " +
                (activeBtn === filterName ? "active" : "")
              }
            >
              <p> {filterName}</p>
            </button>
          ))}
        </div>
      )}

      {/* <div
        className="w-full grid  
                grid-cols-1 
                md:grid-cols-2 
                bg-[#f3f4f5] mt-5   "
      >
        {selectedResDish ? (
          <>
            <div>
              <p className="p-4 font-semibold">Item added to cart</p>
              <Dishes data={selectedResDish.card.card} />
              <p className="p-4 text-xl">More Dishes from this restaurant</p>
            </div>
            <br />
            {similarResDishes.map((data) => (
              <Dishes
                data={{
                  ...data.card,
                  restaurant: selectedResDish.card.card.restaurant,
                }}
              />
            ))}
          </>
        ) : activeBtn === "Dishes" ? (
          dishes.map((data) => (
            <Dishes key={data?.card?.card?.info?.id} data={data.card.card} />
          ))
        ) : (
          restaurantData.map((data) => (
            <SearchRestaurant key={data?.card?.card?.info?.id} data={data} />
          ))
        )}
      </div> */}
      {loading ? (
        <SearchShimmer />
      ) : (
        <div
          className="w-full grid  
                grid-cols-1 
                md:grid-cols-2 
                bg-[#f3f4f5] mt-5   "
        >
          {selectedResDish ? (
            <>
              <div>
                <p className="p-4 font-semibold">Item added to cart</p>
                <Dishes data={selectedResDish.card.card} />
                <p className="p-4 text-xl">More Dishes from this restaurant</p>
              </div>
              <br />
              {similarResDishes.map((data) => (
                <Dishes
                  data={{
                    ...data.card,
                    restaurant: selectedResDish.card.card.restaurant,
                  }}
                />
              ))}
            </>
          ) : activeBtn === "Dishes" ? (
            dishes.map((data) => (
              <Dishes key={data?.card?.card?.info?.id} data={data.card.card} />
            ))
          ) : (
            restaurantData.map((data) => (
              data.card?.card?.info?.promoted ? 
              <PromotedRes data={data}/> : <SearchRestaurant key={data?.card?.card?.info?.id} data={data} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;

// ()
