import React from "react";
import { Link } from "react-router-dom";

export function BoardHomeHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
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

        <div className="currentUserName">
          <button className="avatar">
            <span>{user.name}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
