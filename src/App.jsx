import React, { useState } from "react";
import ListOfCheckbox from "./components/ListOfCheckbox";

export default function App() {
  const [selectedOption, setSelectedOption] = useState([]);
  const options = ["Batata", "Batata frita", "Batata quente", "Batata assada"];

  return (
    <div className="page">
      {console.log("selectedOption: ", selectedOption)}

      <ListOfCheckbox
        initialOption={selectedOption}
        allOptions={options}
        setOption={setSelectedOption}
      />
    </div>
  );
}
