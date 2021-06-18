import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { appRoutes } from "./router/route";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {appRoutes.map((el, i) => (
            <Route
              key={el.id}
              exact={el.exact}
              path={el.path}
              component={el.component}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
}

export default App;
