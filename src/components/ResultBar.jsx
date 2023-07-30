import React from "react";
import { styled } from "styled-components";
import { useStore } from "../store";

const Box = styled.div`
  border: 0;
  border-radius: 8px 8px 0 0;
  background: gray;
  color: #000;
  height: 80px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  direction: rtl;
  & input {
    background: transparent !important;
    border: 0;
    font-size: 24px;
    font-family: "Seven Segment", sans-serif;
    outline: none;
    color: #fff;
  }
`;

function ResultBar() {
  const firstNumber = useStore((state) => state.firstNumber);
  const secondNumber = useStore((state) => state.secondNumber);
  const operand = useStore((state) => state.operand);
  return (
    <Box>
      <input
        value={secondNumber ? secondNumber : firstNumber ? firstNumber : "0"}
      />
    </Box>
  );
}

export default ResultBar;
