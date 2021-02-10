import { Login } from "./components/Login";
import { Home } from "./components/Home";
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
        <Route exact strict path="/home">
          <Home />
        </Route>
        <Route exact strict path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}