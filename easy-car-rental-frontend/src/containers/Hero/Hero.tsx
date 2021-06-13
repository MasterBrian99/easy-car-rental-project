import React from "react";
import NavbarLg from "../../components/Navbar/NavbarLg";
import styles from "./styles.module.scss";
import Tilt from "react-tilt";
import Img from "../../assets/images/one.jpg";
const Hero = () => {
  return (
    <>
      <NavbarLg />
      <div className={`${styles.main} `}>
        <div className="container">
          <div className={`${styles.content} columns is-desktop  `}>
            <div
              className={`${styles.textContent}  column is-half-desktop  is-full-tablet is-flex is-flex-direction-column is-justify-content-center is-align-items-center`}
            >
              <h1>BEST CAR FOR RENT TODAY</h1>
              <h2>SEARCH · HIRE · COMPARE · SAVE</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                minus aut amet voluptatum officia atque accusamus tenetur
                ducimus vel iste.
              </p>
            </div>
            <div
              className={`column  is-flex  is-align-items-center is-justify-content-center container ${styles.imgContent}`}
            >
              <Tilt className="Tilt" options={{ max: 25 }}>
                <img
                  src={Img}
                  alt=""
                  className={` ${styles.imgPath} Tilt-inner`}
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
