import React from "react";
import { BoardHomeHeader } from "./BoardHomeHeader";
import { BoardLists } from "./BoardLists";

export function BoardHome() {
  return (
    <div id="home">
      <BoardHomeHeader></BoardHomeHeader>
      <h2>
        <span className="icon icon-board"></span>
        我的看板
      </h2>
      <ul className="board-items">
        <BoardLists></BoardLists>
      </ul>
    </div>
  );
}
