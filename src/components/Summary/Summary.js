import React from 'react';
import './Summary.css'
const Summary = (props) => {
    const { cart } = props;
    console.log(props.cart);


    let totalPrice = 0, totalShipping = 0, itemsFound = 0;
    for (const item of cart) {
        totalPrice = totalPrice + (item.price * item.quantity);
        totalShipping = totalShipping + item.shipping;
        itemsFound = itemsFound + (item.quantity);
    }
    const tax = parseFloat((totalPrice * .01).toFixed(.2));
    const grandTotal = totalPrice + totalShipping + tax;




    return (
        <div className='summary-container'>
            <h2>Order Summary </h2>
            <div className='price-container'>
                <p>selected Items : {itemsFound}</p>
                <p>Total Price : ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax : ${tax}</p>
            </div>
            <h3>Grand total : ${grandTotal}</h3>
            <div className='order-controll-section'>
                <button className='clear-btn'>Clear Cart</button>
                <button className='review-button'>Review Order</button>
            </div>

        </div>
    );
};

export default Summary;