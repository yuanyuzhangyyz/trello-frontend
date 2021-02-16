import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtainBoardLists } from "../../../store/actions/getBoardListsAction";
import { createNewBoard } from "../../../store/actions/boardActions";
import "./styles.scss";

export function BoardLists() {
  const dispatch = useDispatch();
  const boardsLists = useSelector((state) => {
    return state.entities.boardLists.items;
  });
  const newBoardName = useRef(null);
  useEffect(() => {
    dispatch(obtainBoardLists());
  }, [dispatch]);

  return (
    <ul className="boardListsShow">
      {boardsLists.map((board, index) => {
        return (
          <li key={index} className="board-item">
            {board.name}
          </li>
        );
      })}
      <li className="board-item create-new-board">
        <textarea
          className="title form-field-input"
          placeholder="创建新看板"
          ref={newBoardName}
          onBlur={() => {
            dispatch(createNewBoard({ name: newBoardName.current.value }));
            newBoardName.current.value = "";
          }}
        ></textarea>
      </li>
    </ul>
  );
}
