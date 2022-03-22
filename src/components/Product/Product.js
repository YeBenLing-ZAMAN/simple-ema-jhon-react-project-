import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const {name, seller, price, ratings, img ,id} = props.product;
    const {handleClick} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : ${price}</p>
                <p className='product-manufacturer'> <small> Manufacturer: {seller} </small></p>
                <p className='product-ratings'> <small> Rating :{ratings}</small> </p>
            </div>
            <button className='add-cart' onClick={()=>handleClick(name)}> <p>Add to cart</p> </button>
        </div>
    );
};

export default Product;