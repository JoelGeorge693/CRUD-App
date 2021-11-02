import NameActionTypes from "./name.types";
import { addNamesToArray, removeNamesFromArray } from "./name.utils";

const INITIAL_STATE = {
  createdNames: [],
};

const NameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NameActionTypes.CREATE_NAME:
      return {
        ...state,
        createdNames: addNamesToArray(state.createdNames, action.payload),
      };
    case NameActionTypes.DELETE_NAME:
      return {
        ...state,
        createdNames: removeNamesFromArray(state.createdNames, action.payload),
      };
    default:
      return state;
  }
};

export default NameReducer;
