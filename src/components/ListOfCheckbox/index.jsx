import React from "react";
import * as S from "./style";

export default function ListOfCheckbox({
  initialOption,
  allOptions,
  setOption,
}) {
  const checkboxChange = ({ target: { value } }) => {
    if (isChecked(value)) {
      console.log("removendo", value);

      const newOptionSelected = deselectOption(value);

      setOption(newOptionSelected);
    }

    if (!isChecked(value)) {
      console.log("adicionando", value);

      setOption([...initialOption, value]);
    }
  };

  const isChecked = (value) => initialOption.includes(value);

  const deselectOption = (value) =>
    initialOption.filter((option) => option !== value);

  return (
    <S.Wrapper>
      {allOptions.map((option, index) => (
        <S.Checkbox key={index}>
          <input
            type="checkbox"
            name="checkbox"
            value={option}
            id={`checkbox${index}`}
            onChange={checkboxChange}
            checked={initialOption.includes(option)}
          />
          <label htmlFor={`checkbox${index}`}>{option}</label>
        </S.Checkbox>
      ))}
    </S.Wrapper>
  );
}
