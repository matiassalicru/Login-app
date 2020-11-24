import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { login } from "../../actions/auth";

//Components
import { Landing } from "../landing/Landing";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { firebase } from "../../firebase/FirebaseConfig";

export const AppRouter = () => {
  const [isLogged, setIsLogged] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);
        // console.log("logueado");
      } else {
        setIsLogged(false);
        // console.log("deslogueado");
      }
    });
  }, [dispatch, setIsLogged]);

  return (
    <div className="auth__main">
      <BrowserRouter>
        <Switch>
          <PublicRoutes
            exact
            path="/"
            isLogged={isLogged}
            component={Landing}
          />

          <PrivateRoutes
            exact
            path="/auth"
            isLogged={isLogged}
            component={AuthRouter}
          />

          <Redirect to="/auth" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
