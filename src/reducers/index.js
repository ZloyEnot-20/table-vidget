import { combineReducers } from "redux";
import currentUserReducer from "./currentUserReducer";
import dataReducer from "./dataReducer";
import dataStatusReducer from "./dataStatusReducer";

export const rootReducer = combineReducers({
  data: dataReducer,
  status: dataStatusReducer,
  currentUser: currentUserReducer,
});
