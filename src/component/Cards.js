import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import camera from "../images/image01.jpg";
import noteBook from "../images/image02.jpeg";
import birds from "../images/image03.jpg";
import phone from "../images/image04.jpeg";

class Cards extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Card image={camera} name="Camera" price="$ 500" />
        <Card image={noteBook} name="noteBook" price="$ 1500" />
        <Card image={birds} name="birds" price="$ 800" />
        <Card image={phone} name="phone" price="$ 500" />
      </div>
    );
  }
}

export default Cards;
