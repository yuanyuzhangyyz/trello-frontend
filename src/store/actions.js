import { loginTrello } from "./TrelloApi";

export const CLEAR_ERROR = "CLEAR_ERROR";
export function clearError() {
  return {
    type: CLEAR_ERROR,
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
