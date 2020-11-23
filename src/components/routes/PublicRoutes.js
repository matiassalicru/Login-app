import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PublicRoutes = ({ isLogged, component: Component, ...rest }) => {
  return (
    <>
      {isLogged ? (
        <Route {...rest} component={Component} />
      ) : (
        <Redirect to="/auth/login" />
      )}
    </>
  );
};

PublicRoutes.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
