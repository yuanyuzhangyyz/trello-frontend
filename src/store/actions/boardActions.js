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
