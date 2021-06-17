import React from "react";
import styles from "./style.module.scss";
import { RiDashboardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      className={`${styles.main} is-flex  is-flex-direction-column is-justify-content-space-between is-align-items-center`}
    >
      <h1>Easy Car</h1>
      <ul>
        <Link to="/dashboard">
          <li>
            <RiDashboardLine /> Dashboard
          </li>
        </Link>
        <Link to="/dashboard/vehicle">
          <li>
            <RiDashboardLine /> Vehicle
          </li>
        </Link>
      </ul>
      <button className="out">lamo</button>
    </div>
  );
};

export default Sidebar;
