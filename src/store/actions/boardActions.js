import { addNewBoardName } from "../TrelloApi";

//AddBoardName  REQUEST_ADD_BOARDNAME  ADD_BOARDNAME_SUCCESS  ADD_BOARDNAME_FAIL

export const REQUEST_ADD_BOARDNAME = "REQUEST_ADD_BOARDNAME";
function requestAddBoardName() {
  return {
    type: REQUEST_ADD_BOARDNAME,
  };
}

export const ADD_BOARDNAME_SUCCESS = "ADD_BOARDNAME_SUCCESS";
function addBoardNameSuccess(payload) {
  return {
    type: ADD_BOARDNAME_SUCCESS,
    payload: {
      name: payload.name,
      id: payload.id,
    },
  };
}

export const ADD_BOARDNAME_FAIL = "ADD_BOARDNAME_FAIL";
export function addBoardNameFail(error) {
  return {
    type: ADD_BOARDNAME_FAIL,
    payload: {
      error,
    },
  };
}

// 来看一下我们写的第一个 thunk action 创建函数！
// 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它：
// store.dispatch(fetchPosts('reactjs'))

export function createNewBoard(payload) {
  return function (dispatch) {
    dispatch(requestAddBoardName());
    addNewBoardName(payload).then(
      (response) => {
        dispatch(addBoardNameSuccess(response));
      },
      (err) => {
        dispatch(addBoardNameFail(err));
      }
    );
  };
}
