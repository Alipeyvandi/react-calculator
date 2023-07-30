import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useStore = create(
  immer((set, get) => ({
    firstNumber: "",
    secondNumber: "",
    operand: "",
    sideOperand: "",

    pressDigit: (digit) =>
      set((state) => {
        if (!get().firstNumber && digit === "0") return;
        if (!get().operand) {
          state.firstNumber = get().firstNumber + digit;
        }
        if (state.firstNumber && state.operand) {
          state.secondNumber = get().secondNumber + digit;
        }
      }),

    pressSideOperand: (sideOperand) =>
      set((state) => {
        if (sideOperand === "change") {
          if (state.operand) {
            state.secondNumber = -(state.secondNumber * 1);
          } else {
            state.firstNumber = -(state.firstNumber * 1);
          }
        } else {
          if (state.operand) {
            state.secondNumber = state.secondNumber * (state.firstNumber / 100);
          } else {
            state.firstNumber = state.firstNumber / 100;
          }
        }
      }),

    pressOperand: (operand) =>
      set((state) => {
        if (state.secondNumber) {
          if (get().operand === "add") {
            state.firstNumber = state.firstNumber * 1 + state.secondNumber * 1;
            state.operand = operand;
            state.secondNumber = "";
          }
          if (get().operand === "division") {
            state.firstNumber =
              ((state.firstNumber * 1) / state.secondNumber) * 1;
            state.operand = operand;
            state.secondNumber = "";
          }
          if (get().operand === "times") {
            state.firstNumber = state.firstNumber * 1 * state.secondNumber * 1;
            state.operand = operand;
            state.secondNumber = "";
          }
          if (get().operand === "minus") {
            state.firstNumber = state.firstNumber * 1 - state.secondNumber * 1;
            state.operand = operand;
            state.secondNumber = "";
          }
        } else {
          state.operand = operand;
        }
      }),

    pressClear: () =>
      set((state) => {
        state.firstNumber = "";
        state.secondNumber = "";
        state.operand = "";
      }),
  }))
);
