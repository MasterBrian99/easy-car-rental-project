import React from "react";
import styles from "./style.module.scss";
import { RiCarWashingFill } from "react-icons/ri";
import Tilt from "react-tilt";
const ServiceItem = () => {
  return (
    <Tilt className="Tilt" options={{ max: 25 }}>
      <div
        className={`${styles.main} is-flex is-align-items-center is-justify-content-center is-flex-direction-column Tilt-inner`}
      >
        <div
          className={`${styles.cardIcon} is-flex is-align-items-center is-justify-content-center`}
        >
          <RiCarWashingFill />
        </div>
        <h3>Personal Driver</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          dolorem?
        </p>
      </div>
    </Tilt>
  );
};

export default ServiceItem;
