import React, { useState, useEffect } from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import styles from "./style.module.scss";
import { VehicleProp } from "../../interface/interface";
import { Link } from "react-router-dom";

const BrowseHome = () => {
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
    <div className={styles.main}>
      <HeaderText header="What we Have" info="Rent A Car Of Any Brand" />
      <div
        className={` ${styles.cardSet} container is-flex is-justify-content-center is-flex-wrap-wrap`}
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
            vehicle_image={el.vehicle_image}
            vehicle_transmission_type={el.vehicle_transmission_type}
            vehicle_type={el.vehicle_type}
          />
        ))}
      </div>

      <div className="container is-flex is-justify-content-center is-align-items-center">
        <Link to="/" className={styles.moreButton}>
          See More
        </Link>
      </div>
    </div>
  );
};

export default BrowseHome;
