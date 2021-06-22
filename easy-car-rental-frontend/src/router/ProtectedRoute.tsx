import React from "react";

import { Route, Redirect } from "react-router-dom";

// @ts-ignore
const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  console.log(isAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === "user") {
          //user.role
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
