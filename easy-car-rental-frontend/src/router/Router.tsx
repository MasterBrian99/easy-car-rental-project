import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import { appRoutes, protectedRoutes } from "./route";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {appRoutes.map((el, i) => (
            <Route
              key={el.id}
              exact={el.exact}
              path={el.path}
              component={el.component}
            />
          ))}
          {/* @ts-ignore */}
          {protectedRoutes.map((el, i) => (
            <ProtectedRoute
              key={el.id}
              path={el.path}
              component={el.component}
              isAuth={el.permission}
            />
          ))}
          {/* 
          <ProtectedRoute
            path="/profile"
            component={ProfilePage}
            isAuth={user.role}
          /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
