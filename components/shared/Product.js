import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Functions
import { shorten, isInCard, quantityCount } from '../../helper/functions';

// Icons
import trash from "../../SVG/trash.svg";

// Style
import styles from "./Product.module.css";

// Actions
import { addItem, removeItem, increase, decrease } from '../../redux/card/cardAction';

const Product = ({productData}) => {

    const state = useSelector(state => state.cardState)
    const dispatch = useDispatch();

    // const {state, dispatch} = useContext(CardContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} style={{width: "200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productData))}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productData))}><img src={trash} alt="trash" style={{width:"20px"}} /></button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCard(state, productData.id) ?
                        <button className={styles.smallButton} onClick={() => dispatch(increase(productData))}>+</button> :
                        <button onClick={() => dispatch(addItem(productData))}>Add to Card</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;