import { createSlice } from "@reduxjs/toolkit";

const itemslice = createSlice({
  name: "items",
  initialState: [
    
  ],

  reducers: {
    addinitialitem: (state, action) => {
      return action.payload;
    },
  },
});
export const itemaction = itemslice.actions;
export default itemslice;
