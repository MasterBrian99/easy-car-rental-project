import React from "react";
import styles from "./style.module.scss";
import Tilt from "react-tilt";

const VehicleCard = () => {
  return (
    <div>
      <Tilt className="Tilt" options={{ max: 25 }}>
        <div
          className={`${styles.card} is-flex is-flex-direction-column Tilt-inner`}
        >
          <img
            src="https://cdn.pixabay.com/photo/2019/08/18/22/57/dog-4415171_960_720.jpg"
            alt=""
          />
          <div
            className={`${styles.cardInfo} is-flex is-flex-direction-column`}
          >
            <h2>Toyota Mini</h2>
            <h4>
              Registration number : <span>DKS2230</span>
            </h4>
            <h4>
              Transmission Type : <span>Auto</span>
            </h4>
            <h5>
              Color :<span>Green</span>
            </h5>
            <h5>
              Fuel Type : <span>Diesel</span>
            </h5>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default VehicleCard;
