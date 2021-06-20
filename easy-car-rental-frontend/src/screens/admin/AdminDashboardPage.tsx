import React from "react";
import { Box } from "@chakra-ui/layout";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminMainBar from "../../containers/admin/AdminMainBar/AdminMainBar";

const AdminDashboardPage = () => {
  return (
    <>
      <Box className={"mainBackgrounds"} display={"flex"}>
        <Sidebar />
        <AdminMainBar />
      </Box>
      <div className="CircleContainerOne" />
      <div className="CircleContainerTwo" />
    </>
  );
};

export default AdminDashboardPage;
