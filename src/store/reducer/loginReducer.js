import {
  REQUEST_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  CLEAR_LOGIN_ERROR,
} from "../actions/loginActions";

export function loginReducer(
  state = {
    isFetching: false,
    userName: undefined,
  },
  action
) {
  switch (action.type) {
    // Sigin up
    case REQUEST_LOGIN:
      return {
        ...state,
        isFetching: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userName: action.payload.username,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        err: action.payload.error,
      };
    default:
      return state;
  }
}
