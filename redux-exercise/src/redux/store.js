import { configureStore } from "@reduxjs/toolkit";

//slices
import currencyReducer from "./slices/currencySlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
});
