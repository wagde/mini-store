
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Product from './Product';
import { getProducts } from '../../actions/actions';
import Spinner from '../Spinner';

function ProductList() {
    const globalState = useSelector(state => state);
    const { PRODUCTS } = globalState;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    if (!PRODUCTS) return <Spinner />
    return (
        <div className="ProductList">
            {
                PRODUCTS.map((PRODUCT_DATA, index) => {
                    return <Product key={index} PRODUCT_DATA={PRODUCT_DATA} />
                })}
        </div>
    );
}

export default ProductList;
