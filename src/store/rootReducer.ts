import { combineReducers } from "@reduxjs/toolkit";
import products from "store/products/reducer";

const rootReducer = combineReducers({
  products,
});

export default rootReducer;
