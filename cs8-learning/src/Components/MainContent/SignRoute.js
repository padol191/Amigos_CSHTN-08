import React from "react";
import { Route, Redirect } from "react-router-dom";

const SignRoute = ({ isLoggedin: isLogged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogged == 0) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/techs", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default SignRoute;
