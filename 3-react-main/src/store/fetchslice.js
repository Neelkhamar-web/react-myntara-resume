import { createSlice } from "@reduxjs/toolkit";

const fetchslice = createSlice({
  name: "fetch",
  initialState: {
    fetchdone: false,
    currentfetching: false,
  },

  reducers: {
    markfetchdone(state, action) {
      return {
        ...state,
        fetchdone: true,
      };
    },
    markfethstarted(state, action) {
      return {
        ...state,
        currentfetching: true,
      };
    },
    markfetchfinish(state, action) {
      return {
        ...state,
        currentfetching: false,
      };
    },
  },
});
export const fetchaction = fetchslice.actions;
export default fetchslice;
