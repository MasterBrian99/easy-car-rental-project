import React from "react";
import Hero from "../../containers/Hero/Hero";
import Browse from "../Browse/Browse";
import styles from "./style.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.containerOne}></div>
      <Hero />
      <Browse />
    </>
  );
};

export default Home;
