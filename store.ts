import counterReducer from "@/app/feauters/counter/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
