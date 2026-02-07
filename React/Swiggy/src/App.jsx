import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Route, Routes } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import { Coordinates, Visibility } from "./context/contextApi";

const App = () => {
  const [vissible, setVisible] = useState(false);
  const [coordinate, setCoordinate] = useState({
    lat: 18.9690247,
    lng: 72.8205292,
  });

  return (
    <Coordinates.Provider value={{ coordinate, setCoordinate }}>
      <Visibility.Provider value={{ vissible, setVisible }}>
        <div className={vissible ? "max-h-screen overflow-hidden" : ""}>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Body />} />
              <Route path="/restaurantMenu/:id" element={<RestaurantMenu />} />
            </Route>
          </Routes>
        </div>
      </Visibility.Provider>
    </Coordinates.Provider>
  );
};

export default App;
