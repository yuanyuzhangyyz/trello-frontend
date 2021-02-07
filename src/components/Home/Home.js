import React from "react";

export function Home() {
  return (
    <div className="list-wrap list-wrap-content">
      <div className="list-placeholder"></div>

      <div className="list">
        <div className="list-header">
          <textarea className="form-field-input"></textarea>
          <div className="extras-menu" t>
            <span className="icon icon-more"></span>
          </div>
        </div>

        <div className="list-cards">
          {/* <t-card v-for="card of cards" :data="card" :key="card.id"></t-card> */}

          <div className="list-card-add-form">
            <textarea
              className="form-field-input"
              placeholder="为这张卡片添加标题……"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
