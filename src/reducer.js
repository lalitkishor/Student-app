
// reducer 

import { combineReducers } from "redux";
import student from "./student/student-reducer";
import user from "./user/user-reducer";

const reducer = combineReducers(
  {
    student,
    user
  }
);

export default reducer;