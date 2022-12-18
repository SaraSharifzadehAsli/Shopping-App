import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

// Icons
import buy from "../../SVG/buy.png";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {

    const state = useSelector(state => state.cardState)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/Card"><img src={buy} alt="buy" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;