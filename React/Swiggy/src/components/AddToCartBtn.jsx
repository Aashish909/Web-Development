import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import toast from "react-hot-toast";

const AddToCartBtn = ({ resInfo, info, handleIsDiffRes }) => {
  const cartData = useSelector((state) => state.cartSlice.cartItems);
  const getResInfoFromLocalStorage = useSelector(
    (state) => state.cartSlice.resInfo,
  );

  const dispatch = useDispatch();

  function handleAddToCart() {
    // console.log("resInfo: ", resInfo);
    const isAdded = cartData.find((data) => data.id === info.id);
    // let getResInfoFromLocalStorage =
    // JSON.parse(localStorage.getItem("resInfo")) || [];
    if (!isAdded) {
      if (
        getResInfoFromLocalStorage.name === resInfo.name ||
        getResInfoFromLocalStorage.length === 0
      ) {
        dispatch(addToCart({ info, resInfo }));
        toast.success("Added to Cart");
      } else {
        toast.error("Select Same Restaurant");
        handleIsDiffRes();
      }
    } else {
      toast.error("Already Added");
    }
  }
  return (
    <button
      onClick={handleAddToCart}
      className="bg-white absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-lg text-green-700 font-bold rounded-xl border px-10 py-2 drop-shadow cursor-pointer hover:bg-gray-200"
    >
      ADD
    </button>
  );
};

export default AddToCartBtn;
