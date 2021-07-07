import { combineReducers } from "redux";
import types from "./phonebook-types";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD: {
      if (state.find(({ name }) => name === payload)) {
        alert(`This name  is alredy in contacts`);
      }
      return [...state, payload];
    }

    //if (this.state.contacts.find((contact) => contact.name === name)) {
    //     alert(`${name}  is alredy in contacts`);
    //     return;
    //   }
    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};
export default combineReducers({
  contacts,
  filter,
});
