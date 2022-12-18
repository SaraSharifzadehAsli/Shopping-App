import React from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Contexts
// import { ProductsContext } from '../context/ProductContextProvider';

// Styles
import styles from "./ProductDetail.module.css"

const ProductDetail = (props) => {

    let { id } = useParams();
    const data = useSelector(state => state.productsState.products);
    // const data = useContext(ProductsContext);
    const product = data[id - 1];
    const {image, title, description, price, category} = product;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category:</span> {category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;