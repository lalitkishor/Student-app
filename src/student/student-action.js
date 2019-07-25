

import APP_CONSTANT from "../constant/index"

// action
function fetchStudentRequest() {
  return {
    type: APP_CONSTANT.STUDENT.GET.REQUEST
  }
}
function fetchStudentFailure() {
  return {
    type: APP_CONSTANT.STUDENT.GET.FAILURE
  }
}
function fetchStudentSuccess(student) {
  return {
    type: APP_CONSTANT.STUDENT.GET.SUCCESS,
    student
  }
}

export function fetchStudent() {
  return (dispatch, getState) => {
    dispatch(fetchStudentRequest())
    fetch("https://api.myjson.com/bins/1dlper")
      .then((data) => data.json())
      .then((result) => {
        dispatch(fetchStudentSuccess(result))
      })
      .catch((e) => {
        dispatch(fetchStudentFailure())
      })
  }
}