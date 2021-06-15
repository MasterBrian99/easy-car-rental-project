import React from "react";
import styles from "./style.module.scss";
import { RiDashboardLine } from "react-icons/ri";
import { AdminDashSideRoute } from "../../../data/mainData";
import { useHistory } from "react-router-dom";

const SideBar = () => {
  let history = useHistory();
  return (
    <div className={`${styles.main} is-flex is-justify-content-center`}>
      <ul className={styles.items}>
        {AdminDashSideRoute.map((el) => (
          <li
            className="is-flex is-is-justify-content-flex-start is-align-items-center"
            key={el.id}
            onClick={() => {
              history.push(el.route);
            }}
          >
            <RiDashboardLine /> {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
