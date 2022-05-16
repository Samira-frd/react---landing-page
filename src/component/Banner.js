import React from "react";
import styles from "./Banner.module.css";
import banner from "../images/banner.jpg";

const Banner = () => {
  return (
    <div className={styles.container}>
      <img src={banner} alt="Banner" />
      <div className={styles.textContainer}>
        <h1>Arimas Design</h1>
        <p>
          This is a Landing Pages <br/> designed with <br/> <span>React.js</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
