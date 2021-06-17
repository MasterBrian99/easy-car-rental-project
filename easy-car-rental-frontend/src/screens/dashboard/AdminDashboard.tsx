import React from "react";
import DashboardCard from "../../components/dashboard/DashboardCard/DashboardCard";
import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import styles from "./style.module.scss";
const AdminDashboard = () => {
  return (
    <div className={`is-flex   ${styles.adminDashboard}`}>
      <Sidebar />
      <div className="is-flex is-flex-direction-column is-flex-grow-1 ">
        <div className={`is-flex ${styles.mainCard} is-flex-wrap-wrap`}>
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
