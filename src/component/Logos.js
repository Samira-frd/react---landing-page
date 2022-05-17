import React from 'react';
import styles from "./Logos.module.css";
import apple from "../images/apple.png";
import samsung from "../images/samsung.png";
import google from "../images/google.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us</h3>
            <div>
            <img src={apple} alt="logo"/>
            <img src={samsung} alt="logo"/>
            <img src={google} alt="logo"/>
            </div>
        </div>
    );
};

export default Logos;