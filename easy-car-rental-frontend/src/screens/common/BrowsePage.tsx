import { Box } from "@chakra-ui/react";
import React from "react";
import BrowseHome from "../../containers/common/BrowseHome/BrowseHome";
import Navbar from "../../containers/common/Navbar/Navbar";

const BrowsePage = () => {
  // @ts-ignore
  return (
    <>
      <Navbar />
      <Box pt={"8"}>


        <BrowseHome />
      </Box>
      <div className="CircleContainerOne"></div>
      <div className="CircleContainerTwo"></div>
    </>
  );
};

export default BrowsePage;
