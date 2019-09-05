import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}
