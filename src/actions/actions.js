import { SET_PRODUCTS, SORT_PRODUCTS } from './types';
import { getDataApi } from '../API';
export const getProducts = () => {
    return (dispatch) => {
        getDataApi().then((res) => {
            dispatch({ payload: res, type: SET_PRODUCTS })
        })
    }
}

export const sortProducts = (type) => {
    return (dispatch, getstate) => {
        const { PRODUCTS } = getstate();
        const sortedProducts = PRODUCTS.sort(function (a, b) {
            return a[type] - b[type]
        });
        dispatch({ payload: sortedProducts, type: SET_PRODUCTS })
    }
}

export const editProducts = (newProduct) => {
    return (dispatch, getstate) => {
        const { id } = newProduct
        const { PRODUCTS } = getstate();
        const editedProducts = PRODUCTS.map((product) => {
            if (id === product['id']) {
                product = newProduct
            }
            return product
        })
        dispatch({ payload: editedProducts, type: SET_PRODUCTS });
    }
}

