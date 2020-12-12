import React, { useState, useEffect } from 'react';
import ProductInfo from './ProductInfo';
import ProductEdit from './ProductEdit';

function Product(props) {
    const { PRODUCT_DATA } = props;
    // const { name, detail, price, image } = PRODUCT_DATA;
    const [editMode, setEditMode] = useState(false);
    const handelEditMode = () => {
        const toggleMode = editMode ? false : true;
        setEditMode(toggleMode);
    }
    return (
        <div className="Product">
            {editMode ? <ProductEdit handelEditMode={handelEditMode} PRODUCT_DATA={props.PRODUCT_DATA} /> : <ProductInfo handelEditMode={handelEditMode} PRODUCT_DATA={props.PRODUCT_DATA} />}
        </div>
    );
}

export default Product;
