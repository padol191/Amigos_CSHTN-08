import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  isLoggedin: isLogged,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogged == 1) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
