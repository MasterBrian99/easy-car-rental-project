import React, { useState, useEffect } from "react";
import VehicleCard from "../../components/common/VehicleCard/VehicleCard";
import styles from "./style.module.scss";
import { VehicleProp } from "../../interface/interface";
const BrowseContainer = () => {
  const [vehicleData, setVehicleData] = useState<VehicleProp[]>([]!);

  useEffect(() => {
    fetch(
      "http://localhost:8080/Easy_Car_Rental_Backend_war_exploded/api/v1/vehicle"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVehicleData(data.data);
      });
    return () => {};
  }, []);
  return (
    <div className={`${styles.main}`}>
      <div
        className={` container is-flex  is-justify-content-center is-flex-wrap-wrap is-align-items-center ${styles.cardSection}`}
      >
        {vehicleData.map((el, i: number) => (
          <VehicleCard
            key={el.vehicle_Registration_number}
            vehicle_Current_KM={el.vehicle_Current_KM}
            vehicle_Daily_Rate={el.vehicle_Daily_Rate}
            vehicle_Free_Km_for_a_Day={el.vehicle_Free_Km_for_a_Day}
            vehicle_Free_Km_for_a_month={el.vehicle_Free_Km_for_a_month}
            vehicle_Fuel_Type={el.vehicle_Fuel_Type}
            vehicle_Monthly_Rate={el.vehicle_Monthly_Rate}
            vehicle_No_Of_Passengers={el.vehicle_No_Of_Passengers}
            vehicle_Price_per_Extra_KM={el.vehicle_Price_per_Extra_KM}
            vehicle_Registration_number={el.vehicle_Registration_number}
            vehicle_brand={el.vehicle_brand}
            vehicle_color={el.vehicle_color}
            vehicle_image_back_view={el.vehicle_image_back_view}
            vehicle_image_front_view={el.vehicle_image_front_view}
            vehicle_image_interior_view={el.vehicle_image_interior_view}
            vehicle_image_side_view={el.vehicle_image_side_view}
            vehicle_transmission_type={el.vehicle_transmission_type}
            vehicle_type={el.vehicle_type}
            available={el.available}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseContainer;
