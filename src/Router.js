import { Login } from "./components/Login";
import { BoardHome } from "./components/BoardHome";
import { Register } from "./components/Register";
import { App } from "./App";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact strict path="/boardhome">
          <BoardHome />
        </Route>
        <Route exact strict path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
