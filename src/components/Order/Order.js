import React from 'react';
import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProduct ';

const Order = () => {
    const [products , setProducts ]= useProducts();
    const [cart , setCart] = useCart(products);// kichu ekta improt dite jpne 
    return (
        <div>
           <h1> data found : {products.length} </h1>
        </div>
    );
};

export default Order;