import React from "react";
import Navbar from "../../containers/common/Navbar/Navbar";
import VehicleMain from "../../containers/common/VehicleMain/VehicleMain";

const VehiclePage = () => {
  return (
    <>
      <Navbar />
      <VehicleMain />
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
    </>
  );
};

export default VehiclePage;
