import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrements: (state) => {
      state.value--;
    },
    addFive: (state) => {
      state.value += 5;
    },
    reset: (state) => {
      state.value = 0;
    },
    addAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { increment, decrements, addFive, reset, addAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
