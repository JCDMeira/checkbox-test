import React from "react";
import * as S from "./style";

function Checkbox({ initialOption, setOption }) {
  return (
    <S.Checkbox>
      <input type="checkbox" name="event-checkbox" id="event-checkbox" />
      <label for="event-checkbox">{initialOption}</label>
    </S.Checkbox>
  );
}

export default Checkbox;
