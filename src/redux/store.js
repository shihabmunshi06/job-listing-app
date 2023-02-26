import { createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import filterReducer from "./filterReducer"
const store = createStore(filterReducer, composeWithDevTools())

export default store