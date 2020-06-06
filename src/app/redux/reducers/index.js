import { combineReducers } from "redux";
import greetingsReducer from "./greetingsReducer";
import listReducer from "./listReducer";

export default combineReducers({
  greetings: greetingsReducer,
  list: listReducer,
});
