import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminDashboardAddVehicle from "../containers/AdminDashboard/AdminDashboardAddVehicle";
import Browse from "../screens/Browse";
import AdminDashboardHome from "../screens/DashboardAdmin";
import Home from "../screens/Home";
import VehicleInfo from "../screens/VehicleInfo";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/browse" exact component={Browse} />
          <Route path="/vehicle/:id" exact component={VehicleInfo} />
          <Route path="/dashboard" exact component={AdminDashboardHome} />
          <Route
            path="/dashboard/add_vehicle"
            exact
            component={AdminDashboardAddVehicle}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
