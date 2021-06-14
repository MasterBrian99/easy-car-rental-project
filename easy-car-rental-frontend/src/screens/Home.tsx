import React from "react";
import BrowseHome from "../containers/BrowseHome/BrowseHome";
import Hero from "../containers/Hero/Hero";
import Service from "../containers/Services/Service";

const Home = () => {
  return (
    <>
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
      <Hero />

      <Service />
      <BrowseHome />
    </>
  );
};

export default Home;
