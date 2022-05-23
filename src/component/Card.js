import React, { Component } from "react";
import styles from "./Card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  downHandler = () => {
      if( this.state.counter >= 1){
          this.setState((prevState) => ({
            counter: prevState.counter - 1,
          }));
      }
  };

  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { image } = this.props;
    const { name } = this.props;
    const { price } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img src={image} alt="Smart phone" />
        <h3>{name}</h3>
        <p>{price} </p>
        <p>Total cost: {counter && ` ${counter * (Number(price.split(" ")[1]))} $`}</p>
        <div className={styles.counter}>
          <img className={!counter && styles.deactive} src={down} alt="countDown" onClick={this.downHandler} />
          <span>{counter}</span>
          <img src={up} alt="countUp" onClick={this.upHandler} />
        </div>
      </div>
    );
  }
}

export default Card;
