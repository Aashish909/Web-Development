import React, { useState } from "react";

const InPageNavigation = ({ teams, children }) => {
  console.log(teams, children);

  const [index, setIndex] = useState(0);
  return (
    <div>
      {teams.map((team, i) => (
        <button onClick={() => setIndex(i)}>{team}</button>
      ))}
      {children[index]}
    </div>
  );
};

export default InPageNavigation;
