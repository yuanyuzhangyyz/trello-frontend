import { getBoardLists } from "../TrelloApi";

//AddBoardName  REQUEST_GET_BOARDLISTS  GET_BOARDLISTS_SUCCESS  GET_BOARDLISTS_FAIL

export const REQUEST_GET_BOARDLISTS = "REQUEST_GET_BOARDLISTS";
function requestGetBoardlists() {
  return {
    type: REQUEST_GET_BOARDLISTS,
  };
}

export const GET_BOARDLISTS_SUCCESS = "GET_BOARDLISTS_SUCCESS";
function getBoardListsSucess(payload) {
  return {
    type: GET_BOARDLISTS_SUCCESS,
    payload: {
      boardLists: payload,
    },
  };
}

export const GET_BOARDLISTS_FAIL = "GET_BOARDLISTS_FAIL";
export function getBoardListsFail(error) {
  return {
    type: GET_BOARDLISTS_FAIL,
    payload: {
      error,
    },
  };
}

// 来看一下我们写的第一个 thunk action 创建函数！
// 虽然内部操作不同，你可以像其它 action 创建函数 一样使用它：
// store.dispatch(fetchPosts('reactjs'))

export function obtainBoardLists(payload) {
  return function (dispatch) {
    dispatch(requestGetBoardlists());
    getBoardLists(payload).then(
      (response) => {
        dispatch(getBoardListsSucess(response));
      },
      (err) => {
        dispatch(getBoardListsFail(err));
      }
    );
  };
}
