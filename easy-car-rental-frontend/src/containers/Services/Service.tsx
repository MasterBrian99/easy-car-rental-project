import React from "react";
import HeaderText from "../../components/common/HeaderText/HeaderText";
import ServiceItem from "../../components/common/ServiceItem/ServiceItem";
import styles from "./style.module.scss";

const Service = () => {
  return (
    <>
      <div className={styles.main}>
        <HeaderText
          header="What we Serve"
          info="The Benefit From Our Service"
        />
        <div className="container is-flex  is-align-items-center is-justify-content-center is-flex-wrap-wrap">
          <ServiceItem />
          <ServiceItem />
          <ServiceItem />
        </div>
      </div>
    </>
  );
};

export default Service;
