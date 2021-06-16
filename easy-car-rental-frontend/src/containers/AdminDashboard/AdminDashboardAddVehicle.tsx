import React from "react";
import AddVehicleForm from "../../components/admin/AddVehicleForm/AddVehicleForm";
import SideBar from "../../components/admin/SideBar/SideBar";
import styles from "./style.module.scss";

const AdminDashboardAddVehicle = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className="is-flex ">
          <SideBar />
          <AddVehicleForm />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardAddVehicle;
