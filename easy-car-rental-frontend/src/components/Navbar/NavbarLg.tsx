import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
const NavbarLg = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#272A3E") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <div className="is-flex is-justify-content-center is-is-align-items-center">
      <div
        className={`${styles.main} `}
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <div className="container is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
          <h1 className={`title ${styles.header}`}>Easy Car</h1>
          <ul className={styles.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            <li>
              <Link to="/home">Features</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
          <div className={`${styles.sideDiv} is-flex  is-flex-direction-row`}>
            <Link to="/" className={styles.myButton}>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLg;
