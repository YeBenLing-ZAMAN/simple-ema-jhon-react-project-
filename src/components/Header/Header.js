import './Header.css'    
import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='container'>
            <div className='left-container'>
                <img src={logo} alt="" />
            </div>
            <div className='right-container'>
                <li>Order</li>
                <li>Order Review</li>
                <li>Manage Inventory</li>
            </div>
        </nav>
    );
};

export default Header;