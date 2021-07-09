import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const add = createAction("phonebook/add", ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const del = createAction("phonebook/delete");
const changeFilter = createAction("phonebook/changeFilter");

export default { add, del, changeFilter };
