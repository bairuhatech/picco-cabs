import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "./loginSlice";
import navReducer from "./navigation";
import locationModalReducer from "./locationModal";

const Slices = combineReducers({
  User: LoginSlice,
  navigation: navReducer,
  toggle: locationModalReducer,
});
export default Slices;
