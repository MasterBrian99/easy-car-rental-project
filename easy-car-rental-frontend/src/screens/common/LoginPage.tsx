import React from "react";
import Navbar from "../../containers/common/Navbar/Navbar";
import Login from "../../containers/common/Login/Login";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <Login />
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
    </>
  );
};

export default LoginPage;
