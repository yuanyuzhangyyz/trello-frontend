import { registTrello } from "../TrelloApi";

//Sign up
export const CLEAR_REGISTER_ERROR = "CLEAR_REGISTER_ERROR";
export function clearRegisterError() {
  return {
    type: CLEAR_REGISTER_ERROR,
  };
}

export const REQUEST_REGISTER = "REQUEST_REGISTER";
function requestRegister() {
  return {
    type: REQUEST_REGISTER,
  };
}

export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
function receiveUserRegisterSucess(data) {
  return {
    type: USER_REGISTER_SUCCESS,
    payload: {
      username: data.name,
    },
  };
}

export const USER_REGISTER_FAIL = "USER_LOGIN_FAIL";
export function userRegisterFail(error) {
  return {
    type: USER_REGISTER_FAIL,
    payload: {
      error,
    },
  };
}

export function userRegisterAction(payload) {
  return function (dispatch) {
    dispatch(requestRegister());
    registTrello(payload).then(
      (response) => {
        dispatch(receiveUserRegisterSucess(response));
      },
      (err) => {
        dispatch(userRegisterFail(err));
      }
    );
  };
}
