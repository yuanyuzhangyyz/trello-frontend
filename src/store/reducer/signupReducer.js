import {
  CLEAR_REGISTER_ERROR,
  REQUEST_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../actions/signupActions";

export function signupReducer(
  state = {
    isFetching: false,
    userName: undefined,
  },
  action
) {
  switch (action.type) {
    // Sigin up
    case CLEAR_REGISTER_ERROR:
      return {
        ...state,
        err: undefined,
      };
    case REQUEST_REGISTER:
      return {
        ...state,
        isFetching: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userName: action.payload.username,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
