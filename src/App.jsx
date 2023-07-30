import { useEffect, useState } from "react";
import ResultBar from "./components/ResultBar";
import Keypad from "./components/Keypad";
import { useStore } from "./store";

function App() {
  const pressDigit = useStore((state) => state.pressDigit);
  const pressOperand = useStore((state) => state.pressOperand);
  const pressClear = useStore((state) => state.pressClear);
  const pressSideOperand = useStore((state) => state.pressSideOperand);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      const k = e.keyCode;
      if (k >= 48 && k <= 57) {
        pressDigit(k * 1 - 48);
      }
      if (k >= 96 && k <= 105) {
        pressDigit(k * 1 - 96);
      }
      if (k === 27) {
        pressClear();
      }
      if (k === 106) {
        pressOperand("times");
      }
      if (k === 107) {
        pressOperand("add");
      }
      if (k === 109) {
        pressOperand("minus");
      }
      if (k === 111) {
        pressOperand("dvision");
      }
      if (k === 13) {
        pressOperand("equal");
      }
      if (e.shiftKey && k === 53) {
        pressSideOperand('percent')
      }
    });
  }, []);

  return (
    <div id="container">
      <ResultBar />
      <Keypad />
    </div>
  );
}

export default App;
