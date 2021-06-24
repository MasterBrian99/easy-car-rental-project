import React from "react";
import { Box } from "@chakra-ui/layout";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import AdminPendingUsers from "../../containers/admin/AdminPendingUsers/AdminPendingUsers";

const PendingUsersPage = () => {
  return (
    <>
      <Box className={"mainBackgrounds"} display={"flex"}>
        <Sidebar />
        <AdminPendingUsers />
      </Box>
      <div className="CircleContainerOne" />
      <div className="CircleContainerTwo" />
    </>
  );
};

export default PendingUsersPage;
