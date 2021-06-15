import React from "react";
import styles from "./style.module.scss";
import { FaUsers } from "react-icons/fa";

const SummaryCard = () => {
  return (
    <div
      className={`${styles.card} is-flex is-flex-direction-column is-justify-content-center is-align-items-center`}
    >
      <FaUsers color="#fff" size="3.5rem" />
      <h5>Number of Registered Users</h5>
      <h4>1200</h4>
    </div>
  );
};

export default SummaryCard;
