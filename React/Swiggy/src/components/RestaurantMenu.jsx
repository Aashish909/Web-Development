import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { MenuData } from "../utils/MenuData";

let veg =
  "https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg";
let nonVeg =
  "https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png";

const RestaurantMenu = () => {
  const [rawMenu, setRawMenu] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]);
  const [resInfo, setResInfo] = useState([]);
  const [offers, setOffers] = useState([]);
  const [topPicksData, setTopPicksData] = useState(null);
  const [value, setValue] = useState(0);
  // const [currIndex, setCurrIndex] = useState(false);
  // console.log(topPicksData.card.card.carousel);

  useEffect(() => {
    setRawMenu(MenuData);
  }, []);

  const { id } = useParams();
  // console.log(id.split("-").at(-1));
  const mainId = id.split("-").at(-1);

  // console.log(
  //   menuData[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
  //     ?.card?.card,
  // );

  useEffect(() => {
    setResInfo(rawMenu[0]?.data?.cards[2]?.card?.card?.info);

    setOffers(
      rawMenu[0]?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.offers || [],
    );
    // console.log("menuData: ", menuData);
    const filtered =
      rawMenu[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card?.itemCards || c?.card?.card?.categories,
      );

    const topPicksArr =
      rawMenu[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (data) => data?.card?.card?.title === "Top Picks",
      );

    const topPicks = topPicksArr?.[0];

    // console.log("topspictitle", topPicks);

    setTopPicksData(topPicks);

    setMenuCategories(filtered || []);
  }, [rawMenu]);

  // console.log("filter menu: ", menuCategories);

  // console.log(resInfo);

  // async function fetchMenu() {
  //   try {
  //     const swiggyUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=${id}`;

  //     const encodedUrl =
  //       "https://corsproxy.io/?" + encodeURIComponent(swiggyUrl);

  //     const response = await fetch(encodedUrl);

  //     if (!response.ok) {
  //       throw new Error("Request failed: " + response.status);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // }

  // async function fetchMenu() {
  //   const response = await fetch(
  //     "https://corsproxy.io/?" +
  //       encodeURIComponent(
  //         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.34260&lng=85.30990&restaurantId=603606&catalog_qa=undefined&submitAction=ENTER`,
  //       ),
  //   );

  //   const result = await response.json();

  //   console.log("fetch restaurant:", result?.data?.cards[1]?.card?.card);
  // }

  // async function fetchMenu() {
  //   const response = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.34260&lng=85.30990&restaurantId=683064&catalog_qa=undefined&submitAction=ENTER",
  //   );

  //   const result = await response.text();

  //   console.log("result:", result);
  // }
  // useEffect(() => {
  //   // fetchMenu();
  //   setMenuData(MenuData);
  // }, [id]);

  function handlePrev() {
    if (value <= 0) return;
    setValue((prev) => prev - 344);
  }

  function handleNext() {
    if (value >= 344 * 4) return;
    setValue((prev) => prev + 344);
  }

  // function dependentToggle(i) {
  //   // console.log(i);
  //   setCurrIndex(i === currIndex ? null : i);
  // }
  // function toggleFun() {
  //   // console.log(i);
  //   setCurrIndex(!currIndex);
  // }
  return (
    <div className="w-full ">
      <div className="w-[800px]  mx-auto pt-4">
        <p className="text-[12px] text-slate-500">
          <Link to={"/"}>
            <span className="hover:text-slate-700 hover:cursor-pointer">
              Home
            </span>
          </Link>{" "}
          /{" "}
          <Link to={"/"}>
            <span className="hover:text-slate-700 hover:cursor-pointer">
              {resInfo?.city}
            </span>{" "}
            /{" "}
          </Link>
          <span className="text-slate-800 font-bold">{resInfo?.name}</span>
        </p>

        <h1 className="font-bold pt-4 text-2xl">{resInfo?.name}</h1>
        <div className="w-full h-[214.4px] px-4 pb-4  border-black mt-3 rounded-[30px] bg-gradient-to-t from-gray-300/90 p-5">
          <div className="w-full border border-gray-300 rounded-[20px] h-full bg-white ">
            <div className="p-4 w-full">
              <div className="flex items-center gap-2 font-semibold">
                <i className="fi fi-ss-circle-star mt-1 text-green-600 text-lg"></i>
                <span>{resInfo?.avgRatingString}</span>
                <span>({resInfo?.totalRatingsString})</span>
                <span className="text-gray-400">•</span>
                <span>{resInfo?.costForTwoMessage}</span>
              </div>
              <div>
                <p className="underline text-orange-600 font-semibold">
                  {resInfo?.cuisines?.join(", ")}
                </p>

                <div className=" flex gap-2 mt-2 font-semibold">
                  <div className="w-[7px] flex flex-col items-center justify-center ">
                    <div className="w-[7px] h-[7px] bg-gray-300 rounded-full"></div>
                    <div className="w-[1px] h-[25px] bg-gray-300 "></div>
                    <div className="w-[7px] h-[7px] bg-gray-300 rounded-full"></div>
                  </div>

                  <div className="flex flex-col gap-2 font-semibold text-sm ">
                    <p>
                      Outlet{"  "}
                      <span className="text-gray-500 pl-2">
                        {resInfo?.locality}
                      </span>
                    </p>

                    <p className="lowercase">{resInfo?.sla?.slaString}</p>
                  </div>
                </div>
              </div>
              <hr />

              <div className="p-4 w-full">
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex justify-between mt-6">
            <h1 className="font-bold text-2xl">Deals for you</h1>
            <div className="flex gap-3">
              <div
                onClick={handlePrev}
                className={`rounded-full w-9 h-9 flex justify-center items-center transition-all duration-300
              ${
                value <= 0
                  ? "bg-gray-100 opacity-40 pointer-events-none cursor-not-allowed"
                  : "bg-gray-200 cursor-pointer hover:bg-gray-300"
              }
            `}
              >
                <i className="fi-rr-arrow-small-left text-2xl mt-1"></i>
              </div>

              <div
                onClick={handleNext}
                className={`rounded-full w-9 h-9 flex justify-center items-center transition-all duration-300
                    ${
                      value >= 344 * 4
                        ? "bg-gray-100 opacity-40 pointer-events-none cursor-not-allowed"
                        : "bg-gray-200 cursor-pointer hover:bg-gray-300"
                    }
                  `}
              >
                <i className="fi-rr-arrow-small-right text-2xl mt-1"></i>
              </div>
            </div>
          </div>

          <div
            className="flex gap-4 mt-4 transition-transform duration-300"
            style={{ transform: `translateX(-${value}px)` }}
          >
            {offers.map((data) => (
              <Offers data={data} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-center mt-6 leading-5">MENU</h1>
          <div className="w-full mt-4 cursor-pointer">
            <div className="w-full p-3 bg-slate-200 font-semibold text-md text-center rounded-xl relative text-gray-700">
              Search for dishes
              <div className="absolute top-3 right-4">
                <i className="fi fi-rr-search text-gray-500"></i>
              </div>
            </div>
          </div>

          {topPicksData && (
            <div className="w-full overflow-hidden">
              <div className="flex justify-between mt-6">
                <h1 className="font-bold text-2xl">
                  {/* Top Picks */}
                  {topPicksData.card.card.title}
                  {/* {console.log(topPicksData)} */}
                </h1>
                <div className="flex gap-3">
                  <div
                    onClick={handlePrev}
                    className={`rounded-full w-9 h-9 flex justify-center items-center transition-all duration-300
              ${
                value <= 0
                  ? "bg-gray-100 opacity-40 pointer-events-none cursor-not-allowed"
                  : "bg-gray-200 cursor-pointer hover:bg-gray-300"
              }
            `}
                  >
                    <i className="fi-rr-arrow-small-left text-2xl mt-1"></i>
                  </div>

                  <div
                    onClick={handleNext}
                    className={`rounded-full w-9 h-9 flex justify-center items-center transition-all duration-300
                    ${
                      value >= 344 * 4
                        ? "bg-gray-100 opacity-40 pointer-events-none cursor-not-allowed"
                        : "bg-gray-200 cursor-pointer hover:bg-gray-300"
                    }
                  `}
                  >
                    <i className="fi-rr-arrow-small-right text-2xl mt-1"></i>
                  </div>
                </div>
              </div>

              <div
                className="flex gap-3 mt-5 transition-transform duration-300"
                style={{ transform: `translateX(-${value}px)` }}
              >
                {topPicksData.card.card.carousel.map(
                  ({
                    creativeId,
                    dish: {
                      info: { price },
                    },
                  }) => (
                    <div className="min-w-[307px] h-[315px] relative">
                      <img
                        className="w-full h-full"
                        src={
                          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/" +
                          creativeId
                        }
                        alt=""
                      />

                      <div className=" w-full flex justify-between absolute bottom-5 text-white px-4">
                        <p className="font-bold">₹{price / 100}</p>
                        <button className=" border drop-shadow font-bold text-green-600 px-10 py-2 rounded-md bg-white">
                          ADD
                        </button>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}

          <div>
            {/* {menuCategories.map(
              (
                {
                  card: {
                    card: { itemCards, title },
                  },
                },
                i,
              ) => (
                <div>
                  <div className="flex justify-between">
                    <h1>
                      {title} ({itemCards.length})
                    </h1>
                    <i
                      class="fi fi-rr-angle-small-up text-2xl"
                     
                    ></i>
                  </div>
                  {currIndex == i && (
                    <div className="m-5">
                      {itemCards.map(({ card: { info } }) => (
                        <h1>{info.name}</h1>
                      ))}
                    </div>
                  )}
                </div>
              ),
            )} */}
          </div>

          <div>
            {menuCategories.map(({ card: { card } }) => (
              <MenuCard card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

function Offers({
  data: {
    info: { header, offerLogo, couponCode },
  },
}) {
  // console.log(info);
  return (
    <div className="min-w-[328px] h-[75.2px] border rounded-[20px] flex items-center p-4">
      <img
        className="w-12 h-12"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + offerLogo}
        alt=""
      />
      <div className="pl-3">
        <h2 className=" font-bold text-xl">{header}</h2>
        <p className="font-semibold text-gray-500">{couponCode}</p>
      </div>
    </div>
  );
}

function MenuCard({ card }) {
  let hello = false;

  if (card["@type"]) {
    hello = true;
  }

  const [isOpen, setIsOpen] = useState(hello);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }
  if (card.itemCards) {
    const { title, itemCards } = card;
    return (
      <>
        <div className="mt-5">
          <div className="flex justify-between">
            <h1 className={"font-bold text-" + (card["@type"] ? "xl" : "base")}>
              {title} ({itemCards.length})
            </h1>
            <i
              onClick={toggleDropDown}
              className={`fi text-2xl transition-transform duration-1000 ${
                isOpen ? "fi-rr-angle-small-up" : "fi-rr-angle-small-down"
              }`}
            ></i>
          </div>
          {isOpen && <DetailMenu itemCards={itemCards} />}
        </div>

        <hr
          className={
            "my-3 border-slate-200 border-" +
            (card["@type"] ? "[8px]" : "[4px]")
          }
        />
      </>
    );
  } else {
    const { title, categories } = card;
    return (
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        {categories.map((data, i) => (
          <MenuCard key={i} card={data} />
        ))}
      </div>
    );
  }
}

function DetailMenu({ itemCards }) {
  // console.log("detail Menu: ", itemCards[0].card.info);
  return (
    <div className="my-5">
      {itemCards.map(({ card: { info } }) => (
        <DetailMenuCard info={info} />
      ))}
    </div>
  );
}

function DetailMenuCard({
  info: {
    name,
    price,
    finalPrice,
    itemAttribute: { vegClassifier } = {},
    ratings: { aggregatedRating: { rating, ratingCountV2 } = {} } = {},
    description,
    imageId,
  },
}) {
  const [isMore, setIsMore] = useState(false);

  const trimDes = (description ?? "").substring(0, 140) + "...";

  return (
    <>
      <div className="w-full flex justify-between min-h-[182px]">
        <div className="w-[70%]">
          <img
            className="w-5"
            src={vegClassifier === "VEG" ? veg : nonVeg}
            alt=""
          />

          <h2 className="font-bold text-lg">{name}</h2>

          <p>
            {finalPrice ? (
              <>
                <span className="line-through text-gray-400 font-bold">
                  ₹{price / 100}
                </span>{" "}
                <span>₹{finalPrice / 100}</span>
              </>
            ) : (
              <span>₹{price / 100}</span>
            )}
          </p>

          {rating <= 3 ? (
            <p className="flex items-center gap-1">
              <i className="fi fi-ss-star text-yellow-400"></i>
              <span>
                <span className="text-yellow-500">{rating}</span>{" "}
                <span className="text-gray-400">({ratingCountV2})</span>
              </span>
            </p>
          ) : (
            <p className="flex items-center gap-1">
              <i className="fi fi-ss-star text-green-800"></i>
              <span className="font-semibold text-sm">
                <span className="text-green-800">{rating}</span>{" "}
                <span className="text-gray-400">({ratingCountV2})</span>
              </span>
            </p>
          )}

          {(description ?? "").length > 140 ? (
            <div>
              <span className="text-gray-600">
                {isMore ? description : trimDes}
              </span>
              <button
                className="font-bold text-gray-600 ml-1"
                onClick={() => setIsMore(!isMore)}
              >
                {isMore ? "less" : "more"}
              </button>
            </div>
          ) : (
            <span className="text-gray-600">{description}</span>
          )}
        </div>

        <div className="w-[20%] relative h-full">
          <img
            className="rounded-xl aspect-square"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fill/" +
              imageId
            }
            alt=""
          />

          <button className="bg-white px-10 py-2 drop-shadow-xl rounded-xl text-lg font-bold text-green-600 absolute bottom-[-20px] left-5">
            ADD
          </button>
        </div>
      </div>

      <hr className="my-5 h-1 border-slate-200" />
    </>
  );
}

function TopPicks() {
  return <h1>topspcis</h1>;
}

export default RestaurantMenu;
