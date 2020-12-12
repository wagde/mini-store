import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { editProducts } from '../../../../actions/actions';

function ProductEdit(props) {
    const { PRODUCT_DATA } = props;

    const [editData, setEditData] = useState(PRODUCT_DATA);
    const { name, detail, price, image, id } = editData;
    const dispatch = useDispatch();
    const handelChanges = (filed, value) => {
        setEditData({ ...editData, [filed]: value });

    }

    return (
        <div className="edit-Product">
            <div className="edit-buttons">
                <span className="Save" onClick={() => { dispatch(editProducts(editData)); props.handelEditMode(); }}  > Save </span>
                <span className="Cancel" onClick={props.handelEditMode} > Cancel </span>
            </div>
            <div > <label for="image"> Product image </label> <input onChange={(e) => { handelChanges("image", e.target.value) }} name="image" type="url" value={image} alt={image} src={`${image}`} /> </div>
            <div> <label for="name"> Product Name </label>  <input onChange={(e) => { handelChanges("name", e.target.value) }} type="text" value={name} name="name" className="name" /> </div>
            <div> <label for="price"> Product Price </label> <input onChange={(e) => { handelChanges("price", e.target.value) }} type="number" value={price} name="price" className="price" /> </div>
            <div> <label for="detail"> Product Details </label>  <textarea onChange={(e) => { handelChanges("detail", e.target.value) }} value={detail} className="detail" />  </div>
        </div>
    );
}

export default ProductEdit;
