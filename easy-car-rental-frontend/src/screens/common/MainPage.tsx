import React from "react";
import BrowseHome from "../../containers/common/BrowseHome/BrowseHome";
import Hero from "../../containers/common/Hero/Hero";
import Navbar from "../../containers/common/Navbar/Navbar";
const MainPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BrowseHome />
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
    </>
  );
};

export default MainPage;
