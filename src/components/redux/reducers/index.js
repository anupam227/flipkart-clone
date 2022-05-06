import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productReducer from "./productReducer";

const allReducer = combineReducers({
  user: userReducer,
  products: productReducer,
});

export default allReducer;
