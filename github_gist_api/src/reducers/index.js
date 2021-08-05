import counterReducer from "./counter";
import oddReducer from "./isOdd";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isOdd: oddReducer,
});

export default allReducers;
