import React from 'react';
import { useDispatch } from "react-redux";

// Functions
import { shorten } from '../../helper/functions';

// Icons
import trash from "../../SVG/trash.svg";

// Styles
import styles from "./Card.module.css";

// Actions
import { removeItem, decrease, increase } from '../../redux/card/cardAction';

const Card = (props) => {

    const dispatch = useDispatch();

    const {image, title, price, quantity} = props.data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="product" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch(decrease(props.data))}>-</button> :
                    <button onClick={() => dispatch(removeItem(props.data))}><img src={trash} alt="trash" style={{width: "20px"}} /></button>
                }
                <button onClick={() => dispatch(increase(props.data))}>+</button>
            </div>
        </div>
    );
};

export default Card;