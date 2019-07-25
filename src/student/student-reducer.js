import APP_CONSTANT from "../constant/index";


const defaultStudentState = {
  isLoading: false,
  student: null
}
const student = (state = defaultStudentState, action) => {
  switch (action.type) {
    case APP_CONSTANT.STUDENT.GET.REQUEST: {
      return { ...state, isLoading: true }
    }
    case APP_CONSTANT.STUDENT.GET.FAILURE: {
      return { ...state, isLoading: false }
    }
    case APP_CONSTANT.STUDENT.GET.SUCCESS:
      const { student } = action;
      return { ...state, student, isLoading: false }
    default: return state;
  }
}

export default student;