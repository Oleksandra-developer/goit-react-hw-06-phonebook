import types from "./phonebook-types";
import shortid from "shortid";
const add = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});
const del = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});
const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});
export default { add, del, changeFilter };
