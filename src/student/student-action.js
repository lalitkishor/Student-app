

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

function getTotalMark(marks) {
  let Sum = 0;
  Object.keys(marks).map((ele) => {
    Sum = Sum + marks[ele]
  })
  return Sum
}

function getData(result) {
  return Object.keys(result).reduce((a, b) => {
    a[b] = { ...result[b], totalMark: getTotalMark(result[b].marks) }
    return a
  }, {})
}

export function fetchStudent() {
  return (dispatch, getState) => {
    dispatch(fetchStudentRequest())
    fetch("https://api.myjson.com/bins/1dlper")
      .then((data) => data.json())
      .then((result) => {
        dispatch(fetchStudentSuccess(getData(result)))
      })
      .catch((e) => {
        dispatch(fetchStudentFailure())
      })
  }
}