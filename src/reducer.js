
// reducer 

import { combineReducers } from "redux";
import student from "./student/student-reducer";

const reducer = combineReducers(
  {
    student
  }
);

export default reducer;