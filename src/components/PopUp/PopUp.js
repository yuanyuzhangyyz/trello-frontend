import React from "react";
export function PopUp() {
  return (
    <div className="popup-container ">
      <div click="open">
        <slot></slot>
      </div>

      <div className="popup" v-show="isShow">
        <div className="popup-header">
          <span className="popup-title">title </span>
          <a href="!#" className="popup-header-close" click="close">
            <i className="icon icon-close"></i>
          </a>
        </div>

        <div className="popup-content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  );
}
