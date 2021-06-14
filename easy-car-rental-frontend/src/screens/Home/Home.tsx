import React from "react";
import BrowseHome from "../../containers/BrowseHome/BrowseHome";
import Hero from "../../containers/Hero/Hero";
import Service from "../../containers/Services/Service";
import styles from "./style.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.containerOne}></div>
      <div className={styles.containerTwo}></div>
      <Hero />

      <Service />
      <BrowseHome />
    </>
  );
};

export default Home;
