import React, { useState } from "react";
import "./components/base/style.css";
// import Checkbox from "./components/Checkbox";

export default function App() {
  const [selectedOption, setSelectedOption] = useState([]);

  const checkboxChange = ({ target: { value } }) => {
    if (selectedOption.includes(value)) {
      console.log("removendo", value);
      const newOptionSelected = selectedOption.filter(
        (option) => option !== value
      );
      setSelectedOption(newOptionSelected);
    }
    if (!selectedOption.includes(value)) {
      console.log("adicionando", value);
      setSelectedOption([...selectedOption, value]);
    }
  };

  return (
    <div className="page">
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          name="checkbox"
          value="Batata"
          id="checkbox1"
          onChange={checkboxChange}
          checked={selectedOption.includes("Batata")}
        />
        <label htmlFor="checkbox1">Batata</label>
      </div>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          name="checkbox"
          value="Batata frita"
          id="checkbox2"
          onChange={checkboxChange}
          checked={selectedOption.includes("Batata frita")}
        />
        <label htmlFor="checkbox2">Batata frita</label>
      </div>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          name="checkbox"
          value="Batata quente"
          id="checkbox3"
          onChange={checkboxChange}
          checked={selectedOption.includes("Batata quente")}
        />
        <label htmlFor="checkbox3">Batata quente</label>
      </div>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          name="checkbox"
          value="Batata assada"
          id="checkbox4"
          onChange={checkboxChange}
          checked={selectedOption.includes("Batata assada")}
        />
        <label htmlFor="checkbox4">Batata assada</label>
      </div>
    </div>
  );
}
