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

    /* shoping cart information store state */
    const [cart, setCart] = useState([]);

    /* button event handler section */
    const handleAddCart= (product)=>{
        console.log(product);
        /* set information on the state store of shoping cart */
        const newCart = [...cart , product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
               {
                   products.map(product => <Product key={products.id} handleAddCart={handleAddCart} product={product}></Product>)
               }
            </div>
            <div className="cart-container">
                <h2>Order</h2>
                <p>selected items : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;