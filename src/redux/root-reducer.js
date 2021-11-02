import { combineReducers } from "redux";
import NameReducer from "../redux/names/name.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["nameList"],
};
const rootReducer = combineReducers({
  nameList: NameReducer,
});

export default persistReducer(persistConfig, rootReducer);
