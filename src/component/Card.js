import React, { Component } from 'react';
import styles from "./Card.module.css";

class Card extends Component {
    render() {
        const {image} = this.props;
        const {name} = this.props;
        const {price} = this.props;
        return (
            <div className={styles.container}>
                <img src={image} alt="Smart phone"/>
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        );
    }
}

export default Card;