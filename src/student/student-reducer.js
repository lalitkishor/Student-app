import APP_CONSTANT from "../constant/index";

const student = (state = [], action) => {
  switch (action.type) {
    case APP_CONSTANT.STUDENT.GET:
      const { student } = action;
      return { ...student }
    default: return state;
  }
}

export default student;