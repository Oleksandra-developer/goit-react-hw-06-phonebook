import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./phonebook-actions.js";
const contacts = createReducer([], {
  [actions.add]: (state, { payload }) => {
    if (state.find(({ name }) => name === payload.name)) {
      alert(`${payload.name}  is alredy in contacts`);
    }
    return [...state, payload];
  },
  [actions.del]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filter = createReducer("", {
  [actions.changeFilter]: (state, { type, payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
