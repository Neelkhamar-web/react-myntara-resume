import { configureStore } from "@reduxjs/toolkit";
import itemslice from "./itemslice";
import fetchslice from "./fetchslice";
import bagslice from "./bagslice";

const mystore = configureStore({
  reducer: {
    items: itemslice.reducer,
    fetch: fetchslice.reducer,
    bag: bagslice.reducer,
  },
});
export default mystore;
