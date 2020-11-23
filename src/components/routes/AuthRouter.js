import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { RegisterScreen } from "../auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />

          <Route exact path="/auth/register" component={RegisterScreen} />

          <Redirect to='/auth/login'/>
        </Switch>
      </BrowserRouter>
    </>
  );
};
