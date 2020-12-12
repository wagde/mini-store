import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortProducts } from '../../actions/actions'
function Filters(props) {
    const dispatch = useDispatch();
    return (
        <div className="filters">
            <select onChange={(e) => { e.target.value && dispatch(sortProducts(e.target.value)) }} name="Filters" >
                <option value="">Filter by</option>
                <option value="price">price</option>
                <option value="name">name</option>
            </select>
        </div>
    );
}

export default Filters;
