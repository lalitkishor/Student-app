
import APP_CONSTANT from '../constant/index';
const user = (state = {}, action) => {
  switch (action.type) {
    case APP_CONSTANT.USER.SET.AUTH: {
      return { ...state, isAuth: true }
    }
    default: return state
  }
}
export default user;