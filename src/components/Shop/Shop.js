import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import './Shop.css'

const Shop = () => {

    /* collect data form api and store local variable */
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data));
    }, [])

    /* shoping cart information store state  */
    const [cart, setCart] = useState([]);
    /* get data form local store system  */
    useEffect( () =>{
        const storedCart = getStoreCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    /* button event handler section */
    const handleAddCart = (selectedProduct) => {
        // console.log(product);
        let newCart = [];

        /* quantity problem ta slove korbo */
        const exists = cart.find(product => product.id === selectedProduct.id );
        if(!exists){
            selectedProduct.quantity=1;
            newCart=[...cart, selectedProduct];
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity+1;
            /* set information on the state store of shoping cart */
            newCart = [...rest,exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id); /* for store id in loacl store */
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={products.id} handleAddCart={handleAddCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Summary cart={cart}></Summary>
            </div>
        </div>
    );
};

export default Shop;