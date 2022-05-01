import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 200px;
`;

export const Checkbox = styled("div")`
  width: 383px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  position: relative;
  align-items: center;

  label {
    font-size: 12px;
    line-height: 14px;

    color: #999999;
  }

  label::before {
    content: "";

    position: absolute;
    right: 200px;
    top: 10px;

    opacity: 100;

    width: 24px;
    height: 24px;

    border: 1px solid #999;
    background: #fafafc;
    border-radius: 8px;
  }

  input {
    width: 24px;
    height: 24px;

    position: absolute;
    right: 200px;
    top: 10px;

    opacity: 0;
  }

  input:checked + label::before {
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='14' viewBox='0 0 18 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 11.17L1.83 7L0.410004 8.41L6 14L18 2L16.59 0.589996L6 11.17Z' fill='%2342D3FF'/%3E%3C/svg%3E%0A");

    background-repeat: no-repeat;
    background-position: center;
    background-color: red;
  }
`;
