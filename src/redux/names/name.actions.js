import NameActionTypes from "./name.types";

export const createName = (name) => ({
  type: NameActionTypes.CREATE_NAME,
  payload: name,
});

export const deleteName = (name) => ({
  type: NameActionTypes.DELETE_NAME,
  payload: name,
});

export const editName = (name) => ({
  type: NameActionTypes.EDIT_NAME,
});
