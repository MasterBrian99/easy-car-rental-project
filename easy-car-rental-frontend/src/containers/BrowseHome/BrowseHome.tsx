import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import VehicleCard from "../../components/VehicleCard/VehicleCard";
import styles from "./style.module.scss";

const BrowseHome = () => {
  return (
    <div className={styles.main}>
      <HeaderText header="What we Have" info="Rent A Car Of Any Brand" />
      <div
        className={` ${styles.cardSet} container is-flex is-justify-content-center is-flex-wrap-wrap`}
      >
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
      </div>

      <div className="container is-flex is-justify-content-center is-align-items-center">
        <button>hello</button>
      </div>
    </div>
  );
};

export default BrowseHome;
