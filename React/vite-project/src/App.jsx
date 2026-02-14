import { useState } from "react";
import Cards from "./components/cards";
import { data } from "./utils/data";
import ResMenu from "./components/ResMenu";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  function OnSearch() {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(inputVal.toLowerCase()),
    );
    setFilteredData(filteredData);
  }
  return (
    <>
    <ResMenu/>
      <h1>Sale Sale Sale 60% OFF</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={OnSearch}>Search</button>
      <Cards data={filteredData} />
    </>
  );
}

export default App;
