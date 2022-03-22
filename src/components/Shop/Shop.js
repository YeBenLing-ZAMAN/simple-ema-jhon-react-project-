import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    /* collect data form api and store local variable */ 
    const [products, setproducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setproducts(data));
    },[])

    /* button event handler section */
    const handleClick= (id)=>{
        console.log(id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                   products.map(product => <Product key={products.id} handleClick={handleClick} product={product}></Product>)
               }
            </div>
            <div className="cart-container">
                <h2>Order</h2>
            </div>
        </div>
    );
};

export default Shop;