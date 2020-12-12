function ProductInfo(props) {
    const { PRODUCT_DATA } = props;
    const { name, detail, price, image } = PRODUCT_DATA;
    return (
        <>
            <span className="edit" onClick={props.handelEditMode}> Edit </span>
            <div className="img-cont"> <img alt={image} src={`${image}`} /> </div>
            <div className="info">
                <span className="name"> {name} </span>
                <span className="price"> {price} </span>
                <span className="detail"> {detail} </span>
            </div>
        </>
    );
}

export default ProductInfo;
