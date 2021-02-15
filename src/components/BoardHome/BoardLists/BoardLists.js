import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtainBoardLists } from "../../../store/actions/getBoardListsAction";
export function BoardLists() {
  const dispatch = useDispatch();
  const boardsLists = useSelector((state) => {
    return state.entities.boardLists.items;
  });

  useEffect(() => {
    dispatch(obtainBoardLists());
  }, [dispatch, boardsLists]);

  return (
    <ul>
      {boardsLists.map((board, index) => {
        return (
          <li key={index} className="board-item">
            {board.name}
          </li>
        );
      })}
    </ul>
  );
}
