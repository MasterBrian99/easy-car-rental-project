import React from "react";
import { useTabs, TabPanel } from "react-headless-tabs";
import styles from "./style.module.scss";
const AddVehicleForm = () => {
  const [selectedTab, setSelectedTab] = useTabs([
    "account",
    "company",
    "team",
    "billing",
  ]);

  return (
    <div className={styles.main}>
      <div className="is-flex is-justify-content-center">
        <h1>Hello</h1>
      </div>

      <div className={styles.tabBarMain}>
        <nav className={styles.tabBar}>
          <TabSelector
            isActive={selectedTab === "account"}
            onClick={() => setSelectedTab("account")}
          >
            My Account
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "company"}
            onClick={() => setSelectedTab("company")}
          >
            Company
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "team"}
            onClick={() => setSelectedTab("team")}
          >
            Team Members
          </TabSelector>
          <TabSelector
            isActive={selectedTab === "billing"}
            onClick={() => setSelectedTab("billing")}
          >
            Billing
          </TabSelector>
        </nav>
        <div className="p-4">
          <TabPanel hidden={selectedTab !== "account"}>My Account</TabPanel>
          <TabPanel hidden={selectedTab !== "company"}>Company</TabPanel>
          <TabPanel hidden={selectedTab !== "team"}>Team Members</TabPanel>
          <TabPanel hidden={selectedTab !== "billing"}>Billing</TabPanel>
        </div>
      </div>
    </div>
  );
};

export default AddVehicleForm;

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
