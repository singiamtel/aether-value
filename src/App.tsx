import React from "react";
import { BrowserRouter, Redirect, Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./Home"
import Transaction from "./Transactions"

function App() {
  return (
    <BrowserRouter>
        <div className={"h-full w-full"}>
          <Redirect
            from="/"
            to="/home" />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/transactions" component={Transaction} />
            <Route path="*"> </Route>
          </Switch>
        </div>
    </BrowserRouter>
  )}
export default App;
