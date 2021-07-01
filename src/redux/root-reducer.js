import { combineReducers } from "redux";
import TaskReducer from "../redux/tasks/tasks.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["taskList"],
};
const rootReducer = combineReducers({
  taskList: TaskReducer,
});

export default persistReducer(persistConfig, rootReducer);
