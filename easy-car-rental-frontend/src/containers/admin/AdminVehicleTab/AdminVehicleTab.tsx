import React from "react";
import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
      >
        <TabList>
          <Tab className="adminVehicleTabButtons">Add Vehicles</Tab>
          <Tab className="adminVehicleTabButtons">View All Vehicle</Tab>
          <Tab className="adminVehicleTabButtons">Search Vehicles</Tab>
          <Tab className="adminVehicleTabButtons">Delete Vehicles</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
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
