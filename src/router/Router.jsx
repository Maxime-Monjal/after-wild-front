import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../view/Home";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
