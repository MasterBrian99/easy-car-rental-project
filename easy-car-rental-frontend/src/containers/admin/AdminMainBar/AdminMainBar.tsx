import React from "react";
import { Box } from "@chakra-ui/react";
import InfoCard from "../../../components/admin/InfoCard/InfoCard";

const AdminMainBar = () => {
  return (
    <div>
      <Box display={"flex"} ml={"11rem"} flexWrap={"wrap"} mt={"1rem"}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </Box>
    </div>
  );
};

export default AdminMainBar;
