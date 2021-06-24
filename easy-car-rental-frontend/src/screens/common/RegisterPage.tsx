import React from "react";
import Register from "../../containers/common/Register/Register";
import Navbar from "../../containers/common/Navbar/Navbar";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
      <Register />
    </>
  );
};

export default RegisterPage;
