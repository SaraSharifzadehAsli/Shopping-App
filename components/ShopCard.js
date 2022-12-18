import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

// Componenets
import Card from './shared/Card';

// Styles
import styles from "./ShopCard.module.css";

// Actions
import { clear, checkout } from "../redux/card/cardAction";

const ShopCard = () => {

    const state = useSelector (state => state.cardState)
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                {state.selectedItems.map(item => <Card key={item.id} data={item}/>)} 
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items: </span>{state.itemsCounter}</p>
                    <p><span>Total Payments: </span>{state.total} $</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={() => dispatch(checkout())}>Check Out</button>
                        <button className={styles.clear} onClick={() => dispatch(clear())}>Clear</button>
                    </div>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked Out Successfully!</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCard;