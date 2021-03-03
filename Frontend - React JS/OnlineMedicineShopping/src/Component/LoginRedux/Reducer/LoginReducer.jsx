import { LOGIN, LOGOUT } from "../Action/actionTypes";

const initState = {
  userDetails: {},
};

const LoginReducer = (state = initState, action) => {
  if (action === LOGIN) {
    console.log(action.user);
    return {
      ...state,
      userDetails: {}
    };
  } else if (action.type === LOGOUT) {
    return {
      ...state,
      userDetails: {},
    };
  } else {
    return {
      ...state,
    };
  }
};

export default LoginReducer;
