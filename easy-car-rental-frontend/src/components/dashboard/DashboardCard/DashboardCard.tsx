import React from "react";
import styles from "./style.module.scss";
import { FaUsers } from "react-icons/fa";
const DashboardCard = () => {
  return (
    <div className={`${styles.main} is-flex  is-flex-direction-column `}>
      <div className={`${styles.iconCard}`}>
        <FaUsers />
      </div>
      <h2>The number of registered users</h2>
      <h3>99999</h3>
    </div>
  );
};

export default DashboardCard;
