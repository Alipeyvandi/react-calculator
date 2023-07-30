import React from "react";
import Button from "./Button";
import { styled } from "styled-components";
import { useStore } from "../store";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 1px;
  flex: 1;
  background: gray;
`;

function Keypad() {
  const firstNumber = useStore((state) => state.firstNumber);

  return (
    <Container>
      <Button isClear>{firstNumber ? "C" : "AC"}</Button>
      <Button sideOperand ="change" >+/-</Button>
      <Button sideOperand ="percent" >%</Button>
      <Button isOperand operand="division">
        ÷
      </Button>
      <Button digit="7">7</Button>
      <Button digit="8">8</Button>
      <Button digit="9">9</Button>
      <Button isOperand operand="times">
        ×
      </Button>
      <Button digit="4">4</Button>
      <Button digit="5">5</Button>
      <Button digit="6">6</Button>
      <Button isOperand operand="minus">
        -
      </Button>
      <Button digit="1">1</Button>
      <Button digit="2">2</Button>
      <Button digit="3">3</Button>
      <Button isOperand operand="add">
        +
      </Button>
      <Button isZero digit="0">
        0
      </Button>
      <Button>.</Button>
      <Button isOperand operand="equal">
        =
      </Button>
    </Container>
  );
}

export default Keypad;
