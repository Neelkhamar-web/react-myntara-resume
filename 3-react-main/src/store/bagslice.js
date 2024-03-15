import { createSlice } from "@reduxjs/toolkit";

const bagslice = createSlice({
  name: "bags",
  initialState: [],

  reducers: {
    addbagitem: (state, action) => {
      state.push(action.payload);
    },
    removebagitem: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});
export const bagaction = bagslice.actions;
export default bagslice;
