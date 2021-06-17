import React from "react";
import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import styles from "./style.module.scss";
import { useTabs, TabPanel } from "react-headless-tabs";
import AddVehicle from "../../containers/DashboardVehicle/AddVehicle/AddVehicle";

const AdminDashboardVehicle = () => {
  return (
    <div className={`is-flex ${styles.adminDashboard}`}>
      <Sidebar />
      <div className="is-flex is-flex-direction-column is-flex-grow-1">
        <div className={`is-flex ${styles.mainCardVehicle} is-flex-wrap-wrap`}>
          <AddVehicleForm />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardVehicle;

export const AddVehicleForm = () => {
  const [selectedTab, setSelectedTab] = useTabs([
    "addVehicle",
    "updateVehicle",
    "deleteVehicle",
    "viewVehicle",
  ]);

  return (
    <div className={styles.main}>
      <div className="is-flex is-justify-content-center">
        <h1 className={styles.header}>Vehicle Info</h1>
      </div>

      <div className={styles.tabBarMain}>
        <nav className={styles.tabBar}>
          <TabSelector
            isActive={selectedTab === "addVehicle"}
            onClick={() => setSelectedTab("addVehicle")}
          >
            Add Vehicles
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "updateVehicle"}
            onClick={() => setSelectedTab("updateVehicle")}
          >
            Update Vehicles
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "deleteVehicle"}
            onClick={() => setSelectedTab("deleteVehicle")}
          >
            Delete Vehicles
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "viewVehicle"}
            onClick={() => setSelectedTab("viewVehicle")}
          >
            View All Vehicles
          </TabSelector>
        </nav>
        <div className="p-4">
          <TabPanel hidden={selectedTab !== "addVehicle"}>
            <AddVehicle />
          </TabPanel>
          <TabPanel hidden={selectedTab !== "updateVehicle"}>Company</TabPanel>
          <TabPanel hidden={selectedTab !== "deleteVehicle"}>
            Team Members
          </TabPanel>
          <TabPanel hidden={selectedTab !== "viewVehicle"}>asdsasdad</TabPanel>
        </div>
      </div>
    </div>
  );
};

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={`${styles.tabBarBtn}  ${
      isActive ? styles.tabBarBtn_Shadow : "  "
    } `}
    onClick={onClick}
  >
    {children}
  </button>
);
