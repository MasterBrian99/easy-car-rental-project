import React from "react";
import styles from "./style.module.scss";

interface Prop {
  header: string;
  info: string;
}

const HeaderText = ({ header, info }: Prop) => {
  return (
    <div
      className={` ${styles.textContain} container is-flex is-justify-content-center is-flex-direction-column is-align-items-center`}
    >
      <h3>&minus; {header} &minus;</h3>
      <h2>{info}</h2>
    </div>
  );
};

export default HeaderText;
