import React from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Body />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
