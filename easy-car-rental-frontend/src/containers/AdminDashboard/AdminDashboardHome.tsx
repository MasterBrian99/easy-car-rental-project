import React from "react";
import AdminDashHome from "../../components/admin/AdminDash/AdminDash";
import SideBar from "../../components/admin/SideBar/SideBar";
import styles from "./style.module.scss";

const AdminDashboardHome = () => {
  return (
    <div className={styles.main}>
      <div className="is-flex ">
        <SideBar />
        <AdminDashHome />
      </div>
    </div>
  );
};

export default AdminDashboardHome;
