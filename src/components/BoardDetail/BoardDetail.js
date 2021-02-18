import React from "react";
// import { useSelector } from "react-redux";s
import { BoardHomeHeader } from "../BoardHome/BoardHomeHeader";
export function BoardDetail() {
  //   const boardsLists = useSelector((state) => {
  //     return state.entities.boards;
  //   });
  return (
    <>
      <BoardHomeHeader></BoardHomeHeader>
      <div id="board">
        <div className="board map">
          <h2>board.name</h2>
        </div>
        {/* <!--面板容器--> */}
        <div className="board">
          {/* <!--面板列表容器--> */}
          <ul className="list of lists"></ul>

          {/* <!--无内容列表容器--> */}
          <div className="list-wrap no-content  listAdding">
            <div className="list-add">
              {/* //onClick="showListAdding" */}
              <span className="icon icon-add"></span>
              <span>添加另一个列表</span>
            </div>

            <div className="list">
              <div className="list-cards">
                <div className="list-card-add-form">
                  <input
                    className="form-field-input"
                    // ref="newListName"
                    placeholder="为这张卡片添加标题……"
                  />
                </div>
              </div>

              <div className="list-footer">
                <div className="list-add-confirm">
                  <button className="btn btn-success" onClick="addNewList">
                    添加列表
                  </button>
                  <span
                    className="icon icon-close"
                    // onClick="hideListAdding"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
