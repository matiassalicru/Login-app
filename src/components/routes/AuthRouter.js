import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { removeError } from "../../actions/ui";
import { LoginScreen } from "../auth/LoginScreen";
import { RegisterScreen } from "../auth/RegisterScreen";

export const AuthRouter = () => {

  const dispatch = useDispatch();

   const handleChangeView = () => {
     dispatch( removeError() );
   };

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
