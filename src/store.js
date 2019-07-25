
//store

import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducer from "./reducer.js";

export default createStore(reducer, applyMiddleware(reduxThunk));