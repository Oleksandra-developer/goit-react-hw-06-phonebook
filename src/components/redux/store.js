import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import phonebookReducer from "./phonebook/phonebook-reducer";

const reducer = combineReducers({
  phonebook: phonebookReducer,
});
const store = createStore(reducer, composeWithDevTools());
export default store;
