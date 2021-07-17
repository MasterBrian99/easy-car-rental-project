import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import InfoCard from "../../../components/admin/InfoCard/InfoCard";
import axios from "axios";

const AdminMainBar = () => {

  const [userCount, setuserCount] = useState(0);
  const [driverCount, setDriverCount] = useState(0);
  const [vehicleCount, setVehicleCount] = useState(0)

  async function getUserCount() {
    const res = await axios.get('http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/customer/count');
    setuserCount(res.data.data);

  }

  async function getDriverCount() {
    const res = await axios.get('http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/driver/count');
    setDriverCount(res.data.data);
  }

  async function getVehicleCount() {
    const res = await axios.get('http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/vehicle/count');
    setVehicleCount(res.data.data)
  }

  useEffect(() => {
    getUserCount();
    getDriverCount();
    getVehicleCount();
    return () => {

    }
  }, [])


  return (

    <div>
      <Box display={"flex"} ml={"11rem"} flexWrap={"wrap"} mt={"1rem"}>
        <InfoCard name="The number of registered users" count={userCount} />
        <InfoCard name="The number of available Drivers" count={driverCount} />
        <InfoCard name="The number of bookings active for the day" count={2} />
        <InfoCard name="The Number Of Vehicles" count={vehicleCount} />
      </Box>
    </div>
  );
};

export default AdminMainBar;
