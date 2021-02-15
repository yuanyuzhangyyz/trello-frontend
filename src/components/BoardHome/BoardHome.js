import React, { useRef } from "react";
import { BoardHomeHeader } from "./BoardHomeHeader";
import { BoardLists } from "./BoardLists";
import { useDispatch } from "react-redux";
import { createNewBoard } from "../../store/actions/boardActions";

export function BoardHome() {
  const newBoardName = useRef(null);
  const dispatch = useDispatch();
  return (
    <div id="home">
      <BoardHomeHeader></BoardHomeHeader>
      <h2>
        <span className="icon icon-board"></span>
        我的看板
      </h2>
      <ul className="board-items">
        <BoardLists></BoardLists>
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
    </div>
  );
}
