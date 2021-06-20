import React from "react";
import { Box } from "@chakra-ui/layout";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminVehicleTab from "../../containers/admin/AdminVehicleTab/AdminVehicleTab";

const AdminDashboardVehiclePage = () => {
  return (
    <>
      <Box className={"mainBackgrounds"} display={"flex"}>
        <Sidebar />
        <AdminVehicleTab />
      </Box>
      <div className="CircleContainerOne" />
      <div className="CircleContainerTwo" />
    </>
  );
};

export default AdminDashboardVehiclePage;
