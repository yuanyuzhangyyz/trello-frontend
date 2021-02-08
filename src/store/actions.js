import { loginTrello, registTrello } from "./TrelloApi";

export const CLEAR_LOGIN_ERROR = "CLEAR_LOGIN_ERROR";
export function clearLoginError() {
  return {
    type: CLEAR_LOGIN_ERROR,
  };
}
export const CLEAR_REGISTER_ERROR = "CLEAR_ERROR";
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

export const USER_REGISTER_SUCCESS = "USER_LOGIN_SUCCESS";
function receiveUserRegisterSucess(data) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      username: data.name,
    },
  };
}

export const USER_REGISTER_FAIL = "USER_LOGIN_FAIL";
export function userRegisterFail(error) {
  return {
    type: USER_LOGIN_FAIL,
    payload: {
      error,
    },
  };
}

export const REQUEST_LOGIN = "REQUEST_LOGIN";
function requestLogin() {
  return {
    type: REQUEST_LOGIN,
  };
}

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
function receiveUserLoginSuccess(data) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      username: data.name,
    },
  };
}

export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export function userLoginFail(error) {
  return {
    type: USER_LOGIN_FAIL,
    payload: {
      error,
    },
  };
}

// 来看一下我们写的第一个 thunk action 创建函数！
// 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它：
// store.dispatch(fetchPosts('reactjs'))

export function userLoginAction(payload) {
  return function (dispatch) {
    dispatch(requestLogin());
    loginTrello(payload).then(
      (response) => {
        dispatch(receiveUserLoginSuccess(response));
      },
      (err) => {
        dispatch(userLoginFail(err));
      }
    );
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
