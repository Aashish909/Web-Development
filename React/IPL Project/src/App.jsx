import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MatchDetail from "./components/MatchDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matchDetail/:id" element={<MatchDetail />} />
      </Routes>
    </>
  );
};

export default App;
