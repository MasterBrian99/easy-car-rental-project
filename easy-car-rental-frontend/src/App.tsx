import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { appRoutes } from "./router/route";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {appRoutes.map((el) => (
            <Route
              key={el.id}
              path={el.path}
              exact={el.exact}
              component={el.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
