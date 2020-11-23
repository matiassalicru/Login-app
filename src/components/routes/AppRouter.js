import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";

//Components
import { Landing } from "../landing/Landing";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const [isLogged, setIsLogged] = useState(false);

  const state = useSelector((state) => state.auth);

  useEffect(() => {
    if (state?.uid) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [state]);

  console.log(state);

  console.log(isLogged);

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
