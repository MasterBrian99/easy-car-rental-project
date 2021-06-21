import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { appRoutes } from "./router/route";

function App() {
  const [user, setUser] = useState();

  return (
    <>
      {/* @ts-ignore */}
      <UserContext.Provider value={{ user, setUser }}>
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
      </UserContext.Provider>
    </>
  );
}

export default App;
