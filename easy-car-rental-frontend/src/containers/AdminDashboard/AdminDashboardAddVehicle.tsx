import React from "react";
import SideBar from "../../components/admin/SideBar/SideBar";
import styles from "./style.module.scss";

const AdminDashboardAddVehicle = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className="is-flex ">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardAddVehicle;
