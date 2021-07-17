import React, { useState, useContext } from "react";

import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";



// @ts-ignore
const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {

  // @ts-ignore
  const [user, setUser] = useContext(UserContext)

  console.log(isAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth.indexOf(user.role) !== -1) {  //isAuth.indexOf(user.role) !== -1
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
