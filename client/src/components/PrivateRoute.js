import React from "react";
import { Route, Redirect } from "react-router-dom";

export function PrivateRouteLanding({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
            <Redirect to="/" />
          )
      }
    />
  );
}

export function PrivateRouteHome({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} {...rest} />
        ) : (
            <Redirect to="/home" />
          )
      }
    />
  );
}