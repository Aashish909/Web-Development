import React, { use, useContext, useState } from "react";
import { CartContext } from "../context/contextApi";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, deleteItem } from "../redux/cartSlice";
import toast from "react-hot-toast";

let veg =
  "https://i.pinimg.com/736x/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.jpg";
let nonVeg =
  "https://www.pngkey.com/png/full/245-2459071_non-veg-icon-non-veg-symbol-png.png";

const Cart = () => {
  // const { cartData, setCartData } = useContext(CartContext);

  //From redux
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const resInfo = useSelector((state) => state.cartSlice.resInfo);
  // console.log("cartData", cartData);
  const userData = useSelector((state) => state.authSlice.userData);

  const dispatch = useDispatch();

  // let totalPrice = 0;

  // for (let i = 0; i < cartData.length; i++) {
  //   totalPrice += cartData[i].price / 100 || cartData[i].finalPrice / 100;
  // }

  let totalPrice = cartData.reduce(
    (acc, curVal) => (acc += curVal.price / 100 || curVal.finalPrice / 100),
    0,
  );

  if (cartData.length === 0)
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
        <div className="text-center max-w-md">
          {/* Image */}
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt="cart is empty"
            className="w-72 mx-auto mb-6"
          />

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Your cart is empty
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 mb-6">
            You can go to home page to view more restaurants
          </p>

          {/* Button */}
          <Link
            to="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer"
          >
            See restaurants near you
          </Link>
        </div>
      </div>
    );
  function handleRemoveCart(id) {
    // console.log("cart delete", id);

    if (cartData.length > 1) {
      // dispatch(deleteItem(id));
      let newArray = [...cartData];
      newArray.splice(id, 1);
      //  setCartData(newArray);
      dispatch(deleteItem(newArray));
      toast.success("Removed from Cart");
    } else {
      handleClearCart();
      toast.success("Cart is cleared");
    }
  }

  function handleClearCart() {
    // setCartData([]);
    dispatch(clearCart());
    toast.success("Cart is cleared");
    // localStorage.setItem("cartItem", JSON.stringify([]));
    // localStorage.clear();
  }

  function handlePlaceOrder() {
    if (!userData) return toast.error("Login to place order");
    toast.success("Order Placed");
  }

  return (
    <div className="w-full">
      <div className="w-[95%]  md:w-[800px] mx-auto">
        <Link to={`/restaurantMenu/${resInfo.id}`}>
          <div className="my-10 flex gap-4">
            <img
              className="w-32 rounded-xl aspect-square"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300/" +
                resInfo?.cloudinaryImageId
              }
              alt=""
            />
            <div>
              <h2 className="text-3xl">{resInfo.name}</h2>
              <p>{resInfo.city}</p>
            </div>
          </div>
        </Link>
        <hr className="my-5 h-1 border-slate-300" />
        {/* {cartData.map((data, id) => (
          <div className="flex w-full justify-between my-5 p-2">
            <div className="w-[70%] ">
              <h2 className="text-3xl">{data.name}</h2>
              <p>{data.description}</p>
              <p className="mt-2">
                ₹{data.price ? data.price / 100 : data.finalPrice / 100}
              </p>
            </div>
            <div className="w-[20%] relative h-full">
              <img
                className="rounded-xl aspect-square"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300/" +
                  data.imageId
                }
                alt=""
              />

              <button
                onClick={() => handleRemoveCart(id)}
                className="bg-white px-8 py-2 drop-shadow-xl rounded-xl text-lg font-bold text-red-600 absolute bottom-[-20px] left-4 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))} */}

        <div>
          {cartData.map(
            (
              {
                name,
                price,
                finalPrice,
                itemAttribute = {},
                ratings: {
                  aggregatedRating: { rating, ratingCountV2 } = {},
                } = {},
                description,
                imageId,
              },
              i,
            ) => {
              // const [isMore, setIsMore] = useState(false);

              const trimDes = (description ?? "").substring(0, 140) + "...";
              return (
                <>
                  <div className="w-full flex justify-between min-h-[182px]">
                    <div className="w-[55%] md:w-[70%]">
                      <img
                        className="w-5"
                        src={
                          itemAttribute && itemAttribute.vegClassifier === "VEG"
                            ? veg
                            : nonVeg
                        }
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
                            <span className="text-gray-400">
                              ({ratingCountV2})
                            </span>
                          </span>
                        </p>
                      ) : (
                        <p className="flex items-center gap-1">
                          <i className="fi fi-ss-star text-green-800"></i>
                          <span className="font-semibold text-sm">
                            <span className="text-green-800">{rating}</span>{" "}
                            <span className="text-gray-400">
                              ({ratingCountV2})
                            </span>
                          </span>
                        </p>
                      )}

                      {/* {(description ?? "").length > 140 ? (
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
                      )} */}
                      <div className="line-clamp-2">{description}</div>
                    </div>

                    <div className="w-[30%] md:w-[20%] relative h-full">
                      <img
                        className="rounded-xl aspect-square"
                        src={
                          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300/" +
                          imageId
                        }
                        alt=""
                      />

                      <button
                        onClick={handleRemoveCart}
                        className="bg-white px-8 py-2 drop-shadow-xl rounded-xl text-base font-bold text-red-600 absolute bottom-[-20px] left-1/2 -translate-x-1/2 cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <hr className="my-5 h-1 border-slate-200" />
                </>
              );
            },
          )}
        </div>

        <h1 className="text-2xl">
          Total: <span className="font-bold">₹{totalPrice}</span>
        </h1>

        <div className="flex justify-between mt-6">
          <button
            onClick={handlePlaceOrder}
            className="bg-white px-8 py-2 shadow-md rounded-xl
               text-lg font-bold text-green-600 cursor-pointer"
          >
            Place Order
          </button>

          <button
            onClick={handleClearCart}
            className="bg-white px-8 py-2 shadow-md rounded-xl
               text-lg font-bold text-red-600 cursor-pointer"
          >
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
