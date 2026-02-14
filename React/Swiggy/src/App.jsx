import React, { lazy, Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Route, Routes } from "react-router";
// import RestaurantMenu from "./components/RestaurantMenu";
import { CartContext, Coordinates, Visibility } from "./context/contextApi";
// import Cart from "./components/Cart";
// import ErrorPage from "./components/ErrorPage";
import { useSelector } from "react-redux";
// import SigninPage from "./components/SigninBtn";
// import Search from "./components/Search";

const Search = lazy(()=> import("./components/Search"))
const RestaurantMenu =lazy(()=> import("./components/RestaurantMenu"))
const Cart = lazy(()=> import("./components/Cart"))
const ErrorPage = lazy(()=> import("./components/ErrorPage"))
const SigninPage = lazy(()=> import("./components/SigninBtn"))

const App = () => {
  // const [visible, setVisible] = useState(false);
  const [coordinate, setCoordinate] = useState({
    lat: 18.9690247,
    lng: 72.8205292,
  });

  // const [cartData, setCartData] = useState([]);

  // function getDataFromLocalStorage() {
  //   let data = JSON.parse(localStorage.getItem("cartItem")) || [];
  //   setCartData(data);
  // }
  // useEffect(() => {
  //   getDataFromLocalStorage();
  // }, []);

  //From redux
  const visible = useSelector(
    (state) => state.toggleSlice.searchLocationBarToggle,
  );
  const loginVisible = useSelector((state) => state.toggleSlice.loginToggle);

  return (
    // <CartContext.Provider value={{ cartData, setCartData }}>
    <Coordinates.Provider value={{ coordinate, setCoordinate }}>
      {/* <Visibility.Provider value={{ visible, setVisible }}> */}
      <div
        className={
          visible || loginVisible ? "max-h-screen overflow-hidden" : ""
        }
      >
        <Suspense>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Body />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/restaurantMenu/:id"
                element={
                 <RestaurantMenu/>
                }
              />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/signin" element={<SigninPage />} />
              <Route
                path="/search"
                element={
                 <Search/>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </div>
      {/* </Visibility.Provider> */}
    </Coordinates.Provider>
    // </CartContext.Provider>
  );
};

export default App;
