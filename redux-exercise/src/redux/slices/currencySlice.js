import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currecncyType: true,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    priceChange: (state) => {
      state.currecncyType = !state.currecncyType;
    },
  },
});

export const { priceChange } = currencySlice.actions;

export default currencySlice.reducer;
