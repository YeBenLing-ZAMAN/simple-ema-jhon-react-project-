import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, seller, price, ratings, img } = props.product;
    const {handleAddCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price : ${price}</p>
                <p className='product-manufacturer'> <small> Manufacturer: {seller} </small></p>
                <p className='product-ratings'> <small> Rating :{ratings}</small> </p>
            </div>
            <button className='add-cart' onClick={()=>handleAddCart(props.product)}> <p>Add to cart</p> 
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;