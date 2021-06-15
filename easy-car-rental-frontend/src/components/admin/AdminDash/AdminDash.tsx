import React from "react";
import SummaryCard from "../SummaryCard/SummaryCard";
import styles from "./style.module.scss";

const AdminDash = () => {
  return (
    <div className={`${styles.main} is-flex is-flex-direction-column`}>
      <div className="is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap ">
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
        <SummaryCard />
      </div>
      <h1>Hello</h1>
    </div>
  );
};

export default AdminDash;
