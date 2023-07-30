import React from "react";
import { styled } from "styled-components";
import { useStore } from "../store";

const Div = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  grid-column: span ${({ isZero }) => (isZero ? 2 : 1)};
  background: ${({ isOperand }) => (isOperand ? "orange" : "#5d5d5d")};
  font-size: ${({ isOperand }) => (isOperand ? "24" : "18")}px;
  font-weight: ${({ isOperand }) => (isOperand ? "900" : "300")};
  color: #fff;
  &:active {
    background: ${({ isOperand }) =>
      isOperand ? "darkOrange" : "gray"} !important;
  }
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`;

function Button({
  children,
  isClear = false,
  isZero = false,
  isOperand = false,
  sideOperand = "",
  digit = "",
  operand = "",
}) {

  const pressClear = useStore((state) => state.pressClear);
  const pressDigit = useStore((state) => state.pressDigit);
  const pressOperand = useStore((state) => state.pressOperand);
  const pressSideOperand = useStore((state) => state.pressSideOperand);

  function handleClick() {
    if (isOperand) {
      pressOperand(operand);
    }
    if (digit) {
      pressDigit(digit);
    }
    if (isClear) {
      pressClear();
    }
    if (sideOperand) {
      pressSideOperand(sideOperand);
    }
  }

  return (
    <Div onClick={handleClick} isZero={isZero} isOperand={isOperand}>
      {children}
    </Div>
  );
}

export default React.memo(Button);
