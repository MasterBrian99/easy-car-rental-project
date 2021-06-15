import React from "react";
import NavbarLg from "../components/common/Navbar/NavbarLg";

import BrowseContainer from "../containers/Browse/BrowseContainer";

const Browse = () => {
  return (
    <>
      <NavbarLg />
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
      <BrowseContainer />
    </>
  );
};

export default Browse;
