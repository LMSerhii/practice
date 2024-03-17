import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    saveFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { saveFilter } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors

export const selectorFilters = (state) => state.filter.filter;
