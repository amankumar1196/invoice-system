import { combineReducers } from "redux";
import invoice from "./invoiceReducer";
import auth from "./authReducer";
import toastrMessage from "./ToastrMessageReducer";

export default combineReducers({
  invoice,
  auth,
  toastrMessage
});