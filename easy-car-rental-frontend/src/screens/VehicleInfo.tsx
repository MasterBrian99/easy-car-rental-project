import React from "react";
import NavbarLg from "../components/common/Navbar/NavbarLg";

import Vehicle from "../containers/Vehicle/Vehicle";

const VehicleInfo = () => {
  return (
    <>
      <NavbarLg />
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
      <Vehicle />
    </>
  );
};

export default VehicleInfo;
