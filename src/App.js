import "./css/css.css";
import React from "react";
import { Link } from "react-router-dom";
import "./App.scss";

export function App() {
  return (
    <div className="App">
      <div className="fixedTop ">
        <nav className="navBar">
          <div className="logoHeader">PHABRICATION</div>
          <ul className="myAccountButtons">
            <li className="login">
              <Link to="/login">Log In</Link>
            </li>
            <li className="signup">
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>
      </div>
      <section className="hero">
        <div className="headings">
          <h1>
            Trello helps teams work more collaboratively and get more done.
          </h1>
          <p className="lead">
            Trello’s boards, lists, and cards enable teams to organize and
            prioritize projects in a fun, flexible, and rewarding way.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"
            className="img-fluid"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}
