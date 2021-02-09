import React from "react";

export function BoardHome() {
  return (
    <div id="home">
      {/* <t-header></t-header> */}

      <h2>
        <span className="icon icon-board"></span>
        我的看板
      </h2>
      <ul className="board-items">
        <router-link class="board-item" tag="li">
          <span className="title">board name</span>
        </router-link>

        <li className="board-item create-new-board">
          <textarea
            className="title form-field-input"
            placeholder="创建新看板"
            blur="postBoard"
          ></textarea>
        </li>
      </ul>
    </div>
  );
}