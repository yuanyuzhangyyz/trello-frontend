import React from "react";

export function BoardHomeHeader() {
  return (
    <header>
      <div className="left">
        <router-link to="{name: 'Home'}" class="btn btn-icon">
          <i className="icon icon-home"></i>
        </router-link>
        <router-link to="{name: 'Home'}" class="btn btn-icon">
          <i className="icon icon-board"></i>
          <span className="txt">看板</span>
        </router-link>
      </div>
      <router-link to="{name: 'Home'}" class="logo"></router-link>
      <div className="right">
        <a href="!#" className="btn btn-icon">
          <i className="icon icon-add"></i>
        </a>

        <div className="popup-container">
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
      </div>
    </header>
  );
}
