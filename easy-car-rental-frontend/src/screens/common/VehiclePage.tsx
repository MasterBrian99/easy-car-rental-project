import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../containers/common/Navbar/Navbar";
import VehicleMain from "../../containers/common/VehicleMain/VehicleMain";

const VehiclePage = () => {


  // @ts-ignore
let { id } = useParams();

  return (
    <>
      <Navbar />
      <VehicleMain  registration_number={id} />
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
    </>
  );
};

export default VehiclePage;
