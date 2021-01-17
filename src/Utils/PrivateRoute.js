import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "./Common";

// handle the private routes
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/log-in", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
