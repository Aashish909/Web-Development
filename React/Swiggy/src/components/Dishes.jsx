import { useDispatch, useSelector } from "react-redux";
import AddToCartBtn from "./AddToCartBtn";
import { setSimilarResDish, toggleIsDiffRes, toggleIsSimilarResDishes } from "../redux/toggleSlice";
import { clearCart } from "../redux/cartSlice";
import toast from "react-hot-toast";
import {Link} from "react-router-dom";

let veg =
  "https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg";
let nonVeg =
  "https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png";

function Dishes({
  data: {
    info,
    restaurant: { info: resInfo },
    hideRestaurantDetails =  false
  },
}) {
  // const {
  //   info,
  //   restaurant: { info: resInfo },
  // } = data;
  // console.log("data", data);
  let { imageId = "", name, price, isVeg = 0, id: itemId } = info;
  let {
    id,
    name: resName,
    avgRating,
    sla: { slaString },
    slugs: {
      city,
      restaurant: resLocation
    }
  } = resInfo;

  const isDiffRes = useSelector((state) => state.toggleSlice.isDiffRes);
  const { id: cartResId } = useSelector((state) => state.cartSlice.resInfo);

  const dispatch = useDispatch();

  function handleIsDiffRes() {
    // setIsDiffRes((prev) => !prev);
    dispatch(toggleIsDiffRes());
  }

  function handleClearCart() {
    // setCartData([]);
    dispatch(clearCart());
    toast.success("Cart is cleared");
    handleIsDiffRes();
    // localStorage.setItem("cartItem", JSON.stringify([]));
    // localStorage.clear();
  }

  function handleSameRes() {
    if (cartResId == id || !cartResId) {
      // dispatch(toggleIsSimilarResDishes());
      dispatch(
        setSimilarResDish({
          isSimilarResDishes: true,
          city: city,
          resLocation: resLocation,
          resId: id,
          itemId: itemId,
        }),
      );
    }
  }
  // let { name, imageId = "", price, isVeg = 0 }= info
  // let {
  //           id,
  //           name: resName,
  //           avgRating,
  //           sla: { slaString } }= resInfo;
  return (
    <>
      {isDiffRes && (
        <div
          className="w-[90%] sm:w-[520px] h-auto fixed bottom-10 left-1/2 -translate-x-1/2
           flex flex-col gap-2 p-8 border z-50 shadow-md bg-white"
        >
          <h1>Items already in cart</h1>
          <p>
            Your cart contains items from other restaurant. Would you like to
            reset your cart for adding items from this restaurant?
          </p>
          <div className="flex justify-between gap-3 w-full uppercase">
            <button
              onClick={handleIsDiffRes}
              className="border-2 w-1/2 p-3 border-green-600 text-green-600 cursor-pointer "
            >
              No
            </button>
            <button
              onClick={handleClearCart}
              className="  w-1/2 p-3 bg-green-600 text-white cursor-pointer "
            >
              Yes, start a fresh
            </button>
          </div>
        </div>
      )}
      <div className="bg-white m-4 rounded-3xl p-4">
        {!hideRestaurantDetails && (
          <Link to={`/restaurantMenu/${resLocation}-${id}`}>
            <div className="flex justify-between text-sm opacity-70">
              <div>
                <p className="text-sm font-semibold">By {resName}</p>
                <p className="text-[12px]  flex flex-reverse pt-1 lowercase">
                  <i className="fi fi-ss-star pr-1"></i>
                  {avgRating} . {slaString}
                </p>
              </div>

              <div>
                <i className="fi fi-ts-arrow-small-right text-3xl"></i>
              </div>
            </div>
          </Link>
        )}

        {!hideRestaurantDetails && (
          <hr className=" border-t-2 border-dotted border-gray-200 mt-4 mb-3 "></hr>
        )}

        <div className=" my-3 flex justify-between">
          <div className="w-[50%]">
            <div>
              {isVeg == 1 ? (
                <img src={veg} alt="" className="w-4 h-4 mb-1" />
              ) : (
                <img src={nonVeg} alt="" className="w-4 h-4 mb-1" />
              )}
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-md font-medium">₹{price / 100}</p>
              <button className="px-4 py-1 mt-2 w-max border rounded-3xl opacity-70 border-gray-300 text-sm font-base cursor-pointer">
                More Details
              </button>
            </div>
          </div>

          <div className="w-[40%] md:w-[40%] relative  h-full">
            <img
              className="rounded-xl aspect-square object-cover "
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300/" +
                imageId
              }
              alt=""
            />

            {/* <button
            // onClick={handleAddToCart}
            className="bg-white absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-lg text-green-700 font-bold rounded-xl border px-10 py-2 drop-shadow"
          >
            ADD
          </button> */}
            <div onClick={handleSameRes}>
              <AddToCartBtn
                info={info}
                resInfo={resInfo}
                handleIsDiffRes={handleIsDiffRes}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Dishes;
