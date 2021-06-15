import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarLg from "../components/Navbar/NavbarLg";
import Browse from "../screens/Browse";
import Home from "../screens/Home";
import VehicleInfo from "../screens/VehicleInfo";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarLg />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/browse" exact component={Browse} />
          <Route path="/vehicle/:id" exact component={VehicleInfo} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
