import React from "react";
import styles from "./style.module.scss";
import { VehicleProp } from "../../interface/interface";
import { useHistory } from "react-router-dom";
const VehicleCard = (prop: VehicleProp) => {
  let history = useHistory();

  function visitVehicleInfo(info: VehicleProp) {
    history.push(`/vehicle/${info.vehicle_Registration_number}`);
  }

  return (
    <>
      <article className={styles.card} onClick={() => visitVehicleInfo(prop)}>
        <div
          style={{ backgroundImage: `url("${prop.vehicle_image}")` }}
          className={styles.cardHeader}
        ></div>
        <div className={styles.cardBody}>
          <h4 className={styles.cardHeaderTitle}>
            {prop.vehicle_brand} - {prop.vehicle_type}
          </h4>
          <p className={styles.date}>March 20 2015</p>
          <h2 className={styles.headTitles}>
            <span className={styles.headInfo}>Fuel: </span>
            {prop.vehicle_Fuel_Type}
          </h2>
          <h2 className={styles.headTitles}>
            <span className={styles.headInfo}>Monthly Rate: Rs </span>
            {prop.vehicle_Monthly_Rate}
          </h2>
          <h2 className={styles.headTitles}>
            <span className={styles.headInfo}>Daily Rate: Rs </span>
            {prop.vehicle_Daily_Rate}
          </h2>

          <p className={styles.bodyContent}>
            "Kayaks crowd Three Sister Springs, where people and manatees
            maintain controversial coexistence
          </p>
          <button className={`${styles.buttonPrimary} `}>
            <i className="fa fa-chevron-right"></i> Find out more
          </button>
        </div>
      </article>
    </>
  );
};

export default VehicleCard;
