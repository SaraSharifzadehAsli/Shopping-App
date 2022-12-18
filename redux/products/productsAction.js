import axios from "axios"

const fetchProductsRequest = () => {
    return {
        type: "FETCH_PRODUCT_REQUEST"
    }
}

const fetchProductSuccess = products => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: products
    }
}

const fetchProductFailure = error => {
    return {
        type: "FETCH_PRODUCTS_FAILURE",
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                const products = response.data;
                dispatch(fetchProductSuccess(products));
            })
            .catch(error => {
                const errorMSG = error.message;
                dispatch(fetchProductFailure(errorMSG));
            })
    }
}