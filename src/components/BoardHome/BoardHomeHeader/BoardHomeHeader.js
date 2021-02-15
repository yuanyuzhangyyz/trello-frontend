import React from "react";
import { Link } from "react-router-dom";

export function BoardHomeHeader() {
  return (
    <header>
      <div className="left">
        <Link to="/login" className="btn btn-icon">
          <i className="icon icon-home"></i>
        </Link>
        <Link to="/login" className="btn btn-icon">
          <i className="icon icon-board"></i>
          <span className="txt">看板</span>
        </Link>
      </div>
      <Link to="/login" className="logo"></Link>
      <div className="right">
        <a href="!#" className="btn btn-icon">
          <i className="icon icon-add"></i>
        </a>

        <div className="popup-container">
          <div className="popup">
            <div className="popup-header">
              <span className="popup-title">title </span>
              <a href="!#" className="popup-header-close">
                <i className="icon icon-close"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
