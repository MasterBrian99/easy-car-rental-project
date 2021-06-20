import React from "react";
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import AddVehicles from "./components/AddVehicles";
import ViewVehicle from "./components/ViewVehicle";
import SearchVehicle from "./components/SearchVehicle";

const AdminVehicleTab = () => {
  return (
    <Box
      display={"flex"}
      ml={"11rem"}
      mr={"2rem"}
      flexWrap={"wrap"}
      mt={"2rem"}
      className="componentBlurBackground"
      minHeight="93vh"
      height="100%"
      width="100%"
    >
      <Tabs
        isFitted
        variant="soft-rounded"
        colorScheme="blue"
        width="100%"
        border="none"
        isLazy
        lazyBehavior={"unmount"}
      >
        <TabList>
          <Tab className="adminVehicleTabButtons">Add Vehicles</Tab>
          <Tab className="adminVehicleTabButtons">View All Vehicle</Tab>
          <Tab className="adminVehicleTabButtons">Search Vehicles</Tab>
          <Tab className="adminVehicleTabButtons">Delete Vehicles</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <AddVehicles />
          </TabPanel>
          <TabPanel>
            <ViewVehicle />
          </TabPanel>
          <TabPanel>
            <SearchVehicle />
          </TabPanel>
          <TabPanel>
            <p>Four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AdminVehicleTab;
